require('dotenv').config();

var addSongBtn = document.getElementById("addSongBtn");
var requestAuthBtn = document.getElementById("requestAuth");


var client_id = process.env.CLIENTID
var client_secret = process.env.CLIENTSECRET
var redirect_uri = process.env.REDIRECTURI

var access_token = null;
var refresh_token = null;

const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";
const SEARCH = "https://api.spotify.com/v1/search"
const DEVICES = "https://api.spotify.com/v1/me/player/devices";
const PLAYER = "https://api.spotify.com/v1/me/player";
const PLAY = "https://api.spotify.com/v1/me/player/play";

function onPageLoad() {
  client_id = localStorage.getItem("client_id");
  client_secret = localStorage.getItem("client_secret");
  if ( window.location.search.length > 0) {
    handleRedirect();
  } else {
    access_token = localStorage.getItem("access_token");
    if ( access_token === null ) {
      document.getElementById("tokenContainer").style.display = 'block';
    } else {
      document.getElementById("deviceContainer").style.display = 'block';
      refreshDevices();
    }
}

function handleRedirect() {
  let code = getCode();
  fetchAccessToken( code );
  window.history.pushState("", "", redirect_uri);
}

function getCode() {
  let code = null;
  const queryString = window.location.search;
  if ( queryString.length > 0) {
    const urlParams = new URLSearchParams (queryString);
    code = urlParams.get('code')
  }
  return code;

}

function requestAuthorization() {
  client_id = document.getElementById("clientId").value;
  client_secret = docuemnt.getElementById("clientSecret").value;
  localStorage.setItem("client_id", client_id);
  localStorage.setItem("client_secret", client_secret);

  let url = AUTHORIZE;
  url += "?client_id=" + client_id;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirect_uri);
  url += "&show_dialog=true";
  url += "&scope=user-modify-playback-state";
  window.location.href = url;
}

requestAuthBtn.on("click", function() {
  requestAuthorization();
});


function fetchAccessToken(code){
    let body = "grant_type=authorization_code";
    body += "&code=" + code; 
    body += "&redirect_uri=" + encodeURI(redirect_uri);
    body += "&client_id=" + client_id;
    body += "&client_secret=" + client_secret;
    callAuthorizationApi(body);
}

function refreshAccessToken(){
    refresh_token = localStorage.getItem("refresh_token");
    let body = "grant_type=refresh_token";
    body += "&refresh_token=" + refresh_token;
    body += "&client_id=" + client_id;
    callAuthorizationApi(body);
}

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + Buffer.from(str, 'base64')(client_id + ":" + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if ( data.access_token != undefined ){
            access_token = data.access_token;
            localStorage.setItem("access_token", access_token);
        }
        if ( data.refresh_token  != undefined ){
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
        onPageLoad();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function refreshDevices(){
    callApi( "GET", DEVICES, null, handleDevicesResponse );
}

function handleDevicesResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        removeAllItems( "devices" );
        data.devices.forEach(item => addDevice(item));
    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function addDevice(item){
    let node = document.createElement("option");
    node.value = item.id;
    node.innerHTML = item.name;
    document.getElementById("devices").appendChild(node); 
}

function callApi(method, url, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(body);
    xhr.onload = callback;
}

function play() {
  let trackPosition = document.getElementById("tracks").value;
  let album_id = document.getElementById("album").value;
  let body = {};
  if ( album.length > 0 ){
    body.context_uri = album;
  }
  else{
    body.context_uri = "spotify:album:" + album_id;
  }
  body.offset = {};
  body.offset.position = trackPosition.length > 0 ? Number(trackPosition) : 0;
  body.offset.position_ms = 0;
  callApi( "PUT", PLAY + "?device_id=" + deviceId(), JSON.stringify(body), handleApiResponse );
}

addSongBtn.on("click", function() {
  play();
});
}

onPageLoad();
  

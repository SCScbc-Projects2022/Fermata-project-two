// indicate selected using text style -- definitely need to refactor at some point lol
let caveat = document.querySelector('#caveat-label');
let lato = document.querySelector('#lato-label');
let merriweather = document.querySelector('#merriweather-label');
document.querySelector('#caveat').addEventListener('click',() => {
    caveat.style.color = "blue"
    lato.style.color = "#7089AC"
    merriweather.style.color = "#7089AC"
});
document.querySelector('#lato').addEventListener('click',() => {
    caveat.style.color = "#7089AC"
    lato.style.color = "blue"
    merriweather.style.color = "#7089AC"
});
document.querySelector('#merriweather').addEventListener('click',() => {
    caveat.style.color = "#7089AC"
    lato.style.color = "#7089AC"
    merriweather.style.color = "blue"
});

// capture selected font and save to session storage
document.querySelector('#style-btn').addEventListener('click', () => {
    let selected = document.querySelector('input[name="font"]:checked');
    if (!selected) {
        alert("Please select a style option");
        return;
    }
    sessionStorage.setItem('font_id', parseInt(selected.value));
    document.location.replace('/compose/send');
});
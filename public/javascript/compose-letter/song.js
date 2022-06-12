const search = document.querySelector('#song-search');
const searchResults = document.querySelector('#search-results');
const buttons = document.querySelector('#search-next');

document.querySelector('#song-btn').addEventListener('click', async () => {
    // let query = search.value;
    // if (!query) {
    //     alert("Please enter a song title");
    //     return;
    // }
    // searchResults.innerHTML = "";
    // // GET request
    // try {
    //     let res = await fetch(spotifyApiURL);
    //     if (res.ok) {
    //         let data = await res.json();
    //         console.log(data);
    //         // for (i = 0; i < res.placeholderLength; i++) {
    //             // let songOption = document.createElement('input');
    //             // songOption.setAttribute('type', 'radio');
    //             // songOption.id = data.placeholderName; //placeholder;
    //             // songOption.name = 'song';
    //             // songOption.setAttribute('value', data.placeholderSongID);

    //             // let optionLabel = document.createElement('label');
    //             // optionLabel.setAttribute('for', data.placeholderName);
    //             // optionLabel.textContent = `${data.placeholderArtist} - ${data.placeholderName}`;
    //             // optionLabel.id = data.placeholderId;
    //         // }
    //         // change button to "next" and capture value of selected song
    //         buttons.innerHTML = "";
    //         const nextBtn = document.createElement('button');
    //         nextBtn.id = 'next-btn'
    //         nextBtn.textContent = 'Next';
    //         nextBtn.classList = 'btn btn-lg btn-outline-dark'
    //         buttons.appendChild(nextBtn);
    //         nextBtn.addEventListener('click', () => {
    //             let selected = document.querySelector('input[name="song"]:checked'); // ---- add this name property to song options
    //             if (!selected) {
    //                 alert("Please select a song");
    //                 return;
    //             }
    //             sessionStorage.setItem('spotify_id', selected.value); // ----- placeholder value
                document.location.replace('/compose/style');
            // })
    //     }
    // }
    // catch (err) {
    //     console.log(err);
    // }
});
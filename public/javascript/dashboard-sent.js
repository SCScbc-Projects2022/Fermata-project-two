document.querySelector('#list-sent').addEventListener('click', (event) => {
    event.stopPropagation();
    let btn = event.target;
    console.log(btn);
    if (btn.matches('.history-item')) {
        let id = btn.getAttribute('data-letter');
        let song = btn.getAttribute('data-song');
        localStorage.setItem('song_id', song)
        document.location.replace(`/letter/${id}`);
    }
});
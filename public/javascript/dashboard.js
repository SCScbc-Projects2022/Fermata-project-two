// delete letter whose id matches the data-letter property of the clicked delete button
document.querySelector('#list-drafts').addEventListener('click', async (event) => {
    console.log('position 1')
    event.stopPropagation();
    console.log('position 2')
    let btn = event.target;
    console.log(btn);
    if (btn.matches('.draft d-inline')) {
        console.log('position 3')
        let id = btn.getAttribute('data-letter');
        let song = btn.getAttribute('data-song');
        console.log(id)
        console.log(song)
        localStorage.setItem('song_id', song)
        document.location.replace(`/letter/${id}`);
    }
    if (btn.matches('.delete-btn')) {
        let id = btn.getAttribute('data-letter');
        try {
            let del = await fetch(`../../api/letter/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (del.ok) {
                location.reload();
                alert('Draft deleted!');
            } else {
                alert(del.statusText);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
});

document.querySelector('#list-history').addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('clicked')
    let btn = event.target;
    if (btn.matches('.draft d-inline')) {
        let id = btn.getAttribute('data-letter');
        let song = btn.getAttribute('data-song');
        localStorage.setItem('song_id', song)
        document.location.replace(`/letter/${id}`);
    }
});
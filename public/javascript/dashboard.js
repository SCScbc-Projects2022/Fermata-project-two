document.querySelector('#list-drafts').addEventListener('click', async (event) => {
    event.stopPropagation();
    let btn = event.target;
    let id = btn.getAttribute('data-letter');
    try {

    }
    catch (err) {
        console.log(err);
    }
    let del = await fetch(`../../api/letter/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (del.ok) {
        location.reload();
        alert('Draft deleted!');
    } else {
        alert(del.statusText);
    }
});
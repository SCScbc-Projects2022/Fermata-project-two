document.querySelector('#list-drafts').addEventListener('click', async (event) => {
    event.stopPropagation();
    let btn = event.target;
    if (btn.matches('.delete-btn')) {
        let id = btn.getAttribute('data-letter');
        try {
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
        }
    catch (err) {
        console.log(err);
    }
    }
});
document.querySelector('#list-drafts').addEventListener('click', (event) => {
    console.log(event.Target);
    console.log('hmm')
})

// the logic here doesn't work yet so this is a project for another day
// if drafts.length on handlebars

// const handleNoteDelete = (e) => {
//     // Prevents the click listener for the list from being called when the button inside of it is clicked
//     e.stopPropagation();
  
//     const note = e.target;
//     const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;
  
//     if (activeNote.id === noteId) {
//       activeNote = {};
//     }
  
//     deleteNote(noteId).then(() => {
//       getAndRenderNotes();
//       renderActiveNote();
//     });
//   };

// if (delBtn) {
//     const delBtnEl = document.createElement('i');
//     delBtnEl.classList.add(
//       'fas',
//       'fa-trash-alt',
//       'float-right',
//       'text-danger',
//       'delete-note'
//     );
//     delBtnEl.addEventListener('click', handleNoteDelete);

//     liEl.append(delBtnEl);
//   }
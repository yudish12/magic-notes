console.log("hello");
showNotes();
const x = $("#add");
let y = 0;
x.on("click", function () {
    let title = document.getElementById("tit");
    let txt = document.getElementById("text");
    let notes = localStorage.getItem("notes");
    let notesObj = [];
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    myObj={
        addtitle: title.value,
        addtxt:txt.value
    };
    notesObj.push(myObj);
    console.log(txt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    txt.value = "";
    title.value ="";
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` 
        <div class="notes">
        <div class="card">
            <h4 class="card-title"> ${element.addtitle}</h4>
            <p class="card-text"> ${element.addtxt}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let elem = document.querySelector(".note");
    if (notesObj.length != 0) {
        elem.innerHTML = html;
    }
    else {
        elem.innerHTML = "Nothing to show! Use 'Add a Note' section above to add notes";
    }
}
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
  
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
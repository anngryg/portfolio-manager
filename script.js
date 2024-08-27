const addNewBtn = document.getElementById("addNewBtn");
const addForm = document.getElementById("addForm");
const submitBtn = document.getElementById("submitBtn");

// Show form when 'Add new' is clicked
addNewBtn.addEventListener("click", () => {
  addForm.style.visibility = "visible";
  addNewBtn.style.visibility = "hidden";
});

// Hide form when 'Submit' is clicked
submitBtn.addEventListener("click", () => {
  addForm.style.visibility = "hidden";
  addNewBtn.style.visibility = "visible";
});

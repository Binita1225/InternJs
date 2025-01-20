let list = document.getElementById("listItem");
let inputField = document.getElementById("inpField");
let editMode = false; // To check if we're in edit mode or not
let currentEditingItem = null; // For the item being edited
let addButton = document.getElementById("addBtn");

// Function to add a new to-do item
function addNewTodo() {
    let field = inputField.value.trim(); // Get the value and remove leading/trailing spaces
    if (field === "") return; // Do not add empty items

    // If we're in edit mode, update the existing item
    if (editMode && currentEditingItem) {
        currentEditingItem.firstChild.textContent = field; // Update the list item text
        editMode = false;
        currentEditingItem = null; // Clear the current editing item
        inputField.value = ""; // Clear the input field
        addButton.innerText = "Add"; // Change button text back to "Add"
        return;
    }

    // Create the new list item
    let li = document.createElement("li");
    let text = document.createElement("p");
    text.textContent = field;

    // Create the "Edit" button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    // Create the "Delete" button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Create the "Done" button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    // Append the text and buttons to the list item
    li.appendChild(text);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);

    // Append the list item to the list
    list.appendChild(li);

    // Clear the input field
    inputField.value = "";

    // Edit button functionality
    editBtn.addEventListener("click", function() {
        inputField.value = text.textContent; // Load the text into the input field
        editMode = true; // Set edit mode to true
        currentEditingItem = li; // Set the current item being edited
        addButton.innerText = "Update"; // Change button text to "Update"
    });

    // Delete button functionality
    deleteBtn.addEventListener("click", function() {
        list.removeChild(li); // Remove the list item from the list
    });

    // Done button functionality
    doneBtn.addEventListener("click", function() {
        text.style.textDecoration = "line-through"; // Strike through the text
    });
}

// Event listener for the Add button
addButton.addEventListener("click", addNewTodo);

// Event listener for pressing the Enter key
inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addNewTodo(); // Call the same function as the "Add" button
    }
});

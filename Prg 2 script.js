let editRow = null;

function addItem() {
    let name = document.getElementById("itemName").value;
    let qty = document.getElementById("itemQty").value;
    let price = document.getElementById("itemPrice").value;

    if (name === "" || qty === "" || price === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("inventoryTable");

    if (editRow !== null) {
        editRow.cells[0].innerText = name;
        editRow.cells[1].innerText = qty;
        editRow.cells[2].innerText = price;
        resetForm();
        return;
    }

    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = qty;
    row.insertCell(2).innerText = price;

    let actionCell = row.insertCell(3);

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm me-1";
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        editItem(this);
    };

    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm";
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        deleteItem(this);
    };

    actionCell.appendChild(editBtn);
    actionCell.appendChild(delBtn);

    resetForm();
}

function editItem(btn) {
    editRow = btn.parentElement.parentElement;

    document.getElementById("itemName").value = editRow.cells[0].innerText;
    document.getElementById("itemQty").value = editRow.cells[1].innerText;
    document.getElementById("itemPrice").value = editRow.cells[2].innerText;

    let addBtn = document.getElementById("addBtn");
    addBtn.innerText = "Update Item";
    addBtn.className = "btn btn-success w-100";
}

function deleteItem(btn) {
    btn.parentElement.parentElement.remove();
}

function resetForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemQty").value = "";
    document.getElementById("itemPrice").value = "";

    let addBtn = document.getElementById("addBtn");
    addBtn.innerText = "Add Item";
    addBtn.className = "btn btn-primary w-100";

    editRow = null;
}


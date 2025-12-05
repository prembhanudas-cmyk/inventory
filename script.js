 function addItem() {
    let name = document.getElementById("itemName").value;
    let qty = document.getElementById("itemQty").value;

    if (name === "" || qty === "") {
        alert("Please enter item name and quantity");
        return;
    }

    let table = document.getElementById("inventoryTable");

    // Create row and columns
    let row = document.createElement("tr");

    let nameCol = document.createElement("td");
    nameCol.innerText = name;

    let qtyCol = document.createElement("td");
    qtyCol.innerText = qty;

    // Delete button
    let actionCol = document.createElement("td");
    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm";
    delBtn.innerText = "Delete";

    delBtn.onclick = function () {
        table.removeChild(row);
    };

    actionCol.appendChild(delBtn);

    // Append to row
    row.appendChild(nameCol);
    row.appendChild(qtyCol);
    row.appendChild(actionCol);

    // Append row to table
    table.appendChild(row);

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemQty").value = "";
}

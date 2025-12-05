<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Inventory Management</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }
        input, button {
            padding: 8px;
            margin: 5px;
        }
        table {
            width: 50%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #555;
            padding: 10px;
            text-align: left;
        }
        th {
            background: #ddd;
        }
    </style>
</head>

<body>

    <h2>Inventory Management</h2>

    <!-- Inventory Form -->
    <input type="text" id="itemName" placeholder="Enter item name">
    <input type="number" id="itemQty" placeholder="Quantity">
    <button onclick="addItem()">Add Item</button>

    <!-- Table To Display Inventory -->
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="inventoryTable"></tbody>
    </table>

    <script src="script.js"></script>

</body>
</html>

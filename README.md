  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inventory Management</title>

    <!-- Bootstrap CSS -->
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet">

</head>

<body class="bg-light">

<div class="container mt-5">
    <h2 class="text-center mb-4">Inventory Management System</h2>

    <!-- Input Card -->
    <div class="card p-3 shadow-sm">
        <div class="row g-2">

            <div class="col-md-5">
                <input type="text" id="itemName" class="form-control" placeholder="Enter item name">
            </div>

            <div class="col-md-3">
                <input type="number" id="itemQty" class="form-control" placeholder="Quantity">
            </div>

            <div class="col-md-2">
                <button class="btn btn-primary w-100" onclick="addItem()">Add Item</button>
            </div>

        </div>
    </div>

    <!-- Inventory Table -->
    <table class="table table-striped table-bordered mt-4">
        <thead class="table-dark">
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th style="width:120px;">Action</th>
            </tr>
        </thead>
        <tbody id="inventoryTable"></tbody>
    </table>
</div>

<!-- JS -->
<script src="script.js"></script>

<!-- Bootstrap JS -->
<script 
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js">
</script>

</body>
</html>

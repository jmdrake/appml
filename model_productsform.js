{
"database" : {
"connection" : "inventory",
"sql" : "SELECT * FROM Products",
"maintable" : "Products",
"keyfield" : "ProductID"
},
"updateItems" : [
{"item" : "ProductName"},
{"item" : "SupplierID"},
{"item" : "CategoryID"},
{"item" : "Unit"},
{"item" : "Price"}
]
}
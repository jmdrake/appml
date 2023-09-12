{
"database" : {
"connection" : "inventory",
"sql" : "SELECT ProductID,ProductName,CategoryName,SupplierName,Price FROM ((Products LEFT JOIN Suppliers ON Products.SupplierID=Suppliers.SupplierID) LEFT JOIN Categories ON Products.CategoryID=Categories.CategoryID)"
},
"filteritems" : [
{"item" : "ProductName", "label" : "Name"},
{"item" : "Products.SupplierID", "type" : "number", "hidden" : "true"},
{"item" : "Suppliers.SupplierID", "label" : "Supplier"},
{"item" : "Categories.CategoryID", "label" : "Category"}
],
"sortitems" : [
{"item" : "ProductName"}
]
}
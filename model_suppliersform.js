{
"database" : {
"connection" : "inventory",
"sql" : "SELECT * FROM Suppliers",
"maintable" : "Suppliers",
"keyfield" : "SupplierID"
},
"updateItems" : [
{"item" : "SupplierID"},
{"item" : "SupplierName"},
{"item" : "ContactName"},
{"item" : "Address"},
{"item" : "PostalCode"},
{"item" : "City"},
{"item" : "Country"},
{"item" : "Phone"}
]
}
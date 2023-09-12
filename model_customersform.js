{
"database" : {
    "connection" : "inventory",
    "maintable" : "Customers",
    "keyfield" : "CustomerID",
    "sql" : "SELECT * FROM Customers"
},
"updateItems" : [
    {"item" : "CustomerName"},
    {"item" : "Address"},
    {"item" : "PostalCode"},
    {"item" : "City"},
    {"item" : "Country"}
]
}

{
"rowsperpage" : 10,
"security": "user",
"database" : {
    "connection" : "inventory",
    "sql" : "SELECT * FROM Customers",
    "orderby" : "CustomerName"
},
"filteritems" : [
    {"item" : "CustomerName", "label" : "Customer"},
    {"item" : "City"},
    {"item" : "Country"}
],
"sortitems" : [
    {"item" : "CustomerName", "label" : "Customer"},
    {"item" : "City"},
    {"item" : "Country"}
]
}
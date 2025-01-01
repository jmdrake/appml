{
"database" : {
"connection" : "inventory",
"sql" : "SELECT * FROM Shippers",
"maintable" : "Shippers",
"keyfield" : "ShipperID"
},
"updateItems" : [
{"item" : "ShipperName"},
{"item" : "Phone"}
]
}
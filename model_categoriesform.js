{
"security": "admin",
"database" : {
"connection" : "inventory",
"sql" : "SELECT * FROM Categories",
"maintable" : "Categories",
"keyfield" : "CategoryID"
},
"updateItems" : [
{"item" : "CategoryName"},
{"item" : "Description"}
]
}
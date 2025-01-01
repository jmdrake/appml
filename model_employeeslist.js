{
"security" : "admin",
"database" : {
"connection" : "inventory",
"sql" : "SELECT * FROM Employees",
"orderby" : "LastName"
},
"filteritems" : [
{"item" : "LastName"},
{"item" : "FirstName"}
],
"sortitems" : [
{"item" : "LastName"},
{"item" : "FirstName"}
]
}
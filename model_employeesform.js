{
"database" : {
"connection" : "inventory",
"sql" : "SELECT * FROM Employees",
"maintable" : "Employees",
"keyfield" : "EmployeeID"
},
"updateItems" : [
{"item" : "LastName"},
{"item" : "FirstName"},
{"item" : "BirthDate"},
{"item" : "Photo"},
{"item" : "Notes"}
]
}
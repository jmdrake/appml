<?php echo("Access Forbidden");exit();?>
{
"dateformat" : "yyyy-mm-dd",
"securitydb" : {
    "sql" : "SELECT AppmlRoles.Name FROM AppmlRoles LEFT JOIN AppmlUserRoles ON AppmlRoles.RoleID = AppmlUserRoles.RoleID LEFT JOIN AppmlUsers ON AppmlUserRoles.UserID = AppmlUsers.UserID WHERE AppmlUsers.Email = @0 AND AppmlUsers.Pass = @1",
    "connection" : "inventory",
    "host"       : "sql110.epizy.com",
    "dbname"     : "epiz_30071695_inventory",
    "username"   : "epiz_30071695",
    "password"   : "5JzYWbjwlV7JFeC"
},
"databases": [
    {
    "connection" : "househunter",
    "host"       : "sql110.epizy.com",
    "dbname"     : "epiz_30071695_househunter",
    "username"   : "epiz_30071695",
    "password"   : "5JzYWbjwlV7JFeC"
    },
    {
    "connection" : "inventory",
    "host"       : "sql110.epizy.com",
    "dbname"     : "epiz_30071695_inventory",
    "username"   : "epiz_30071695",
    "password"   : "5JzYWbjwlV7JFeC"
    },
    {
    "connection" : "fanhub",
    "host"       : "sql110.epizy.com",
    "dbname"     : "epiz_30071695_fanhub",
    "username"   : "epiz_30071695",
    "password"   : "5JzYWbjwlV7JFeC"
    },
    {
    "connection" : "flowmath",
    "host"       : "sql110.epizy.com",
    "dbname"     : "epiz_30071695_flowmath",
    "username"   : "epiz_30071695",
    "password"   : "5JzYWbjwlV7JFeC"
    }    
]
}

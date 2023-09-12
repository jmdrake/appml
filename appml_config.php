<?php echo("Access Forbidden");exit();?>
{
"dateformat" : "yyyy-mm-dd",
"securitydb" : {
    "sql" : "SELECT AppmlRoles.Name FROM AppmlRoles LEFT JOIN AppmlUserRoles ON AppmlRoles.RoleID = AppmlUserRoles.RoleID LEFT JOIN AppmlUsers ON AppmlUserRoles.UserID = AppmlUsers.UserID WHERE AppmlUsers.Email = @0 AND AppmlUsers.Pass = @1",
    "connection" : "inventory",
    "host"       : "****.****.****",
    "dbname"     : "********",
    "username"   : "*********",
    "password"   : "**********"
},
"databases": [
    {
    "host"       : "****.****.****",
    "dbname"     : "********",
    "username"   : "*********",
    "password"   : "**********"
    }    
]
}

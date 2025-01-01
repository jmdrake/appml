
function btnLogonClick() {
    var button = document.getElementById("btnLogon");
    if(button.innerHTML == "Login") {
        document.getElementById("frmLogon").style.display="block";
    } else {
        logout();
    }
}

function login()
{
    var txtEmail = document.getElementById("email").value;
    var txtPassword = document.getElementById("password").value;
    var appmlobj = new AppML()

    var objLogin = {login : {f1 : txtEmail, f2 : txtPassword}};
    var txtResponse = appmlobj.xmlHttp("./appml.php", JSON.stringify(objLogin), "POST", false);
    var response = JSON.parse(txtResponse.response);
    if(response.loginmessage) {
        console.log(response.loginmessage);
        location.reload();
    } else {
        console.log(response.error);
        alert("You are not authorized");
    }    
}

function logout()
{
    var appmlobj = new AppML()
    var objLogout = {login : {f1 : "", f2 : ""}};
    var txtResponse = appmlobj.xmlHttp("./appml.php", JSON.stringify(objLogout), "POST", false);
    console.log(txtResponse);
    location.reload();
}

function getCurrentUser(email)
{
    var appmlobj = new AppML();
    var objGetUserInfo =         
    {
        action: "GET", 
        applmid : "", 
        displayType: "list", 
        filters: {
            queryFields: ["Email"],
            queryOperators: [0],
            queryValues: [[email]]
        },
        fromrec : 1,
        rowsperpage: 10,
        totalRecCounter: 0
    };
    const txtResponse = appmlobj.xmlHttp("./appml.php?model=model_userinfo", JSON.stringify(objGetUserInfo), "POST", false);
    const response = JSON.parse(txtResponse.response);
    if(response.records) document.getElementById("username").innerHTML = response.records[0].Name;
}

function myController($appml) {
    if ($appml.message == "done") {
        var appmlobj = new AppML();

        const objGetUser = {login : {f1 : "appmluser", f2 : ""}};
        const txtResponse = appmlobj.xmlHttp("./appml.php", JSON.stringify(objGetUser), "POST", false);
        const response = JSON.parse(txtResponse.response);
        if(response.appmluser) {
            document.getElementById("btnLogon").innerHTML = "Logout";
            getCurrentUser(response.appmluser);
        }
    }
}

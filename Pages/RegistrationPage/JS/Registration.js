let doc;
let agree;
let name;
let login;
let password;

function checkCondition(docIN)
{
    doc = docIN;

    name = doc.getElementById("fxName").value;
    login = doc.getElementById("fxLogin").value;
    password = doc.getElementById("fxPassword").value;

    if (name && login && password)
    {
        if (doc.getElementById("fxAgreeCB").checked)
        {
            agree = true;
        }
        else agree = false;

        creatJSONOfUser();
    }
}

function creatJSONOfUser()
{
    let user = {"name": name, "login": login, "password": password, "agree": agree}

    sendUserData(user).then(r => null);
}

async function sendUserData(user)
{
    let response = await fetch('http://localhost:62993/api/registration/registration',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        });

    getResponse(await response.text());
}

function getResponse(response)
{
    if (response)
    {
        if (response == "ОК")
            updateUI();
        else alert(response);
    }
}

function updateUI()
{
    window.location.href = "../MainPage/MainPageHTML.html";
}
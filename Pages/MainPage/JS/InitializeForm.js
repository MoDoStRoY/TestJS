let doc;
let user;

async function initializeForm(docIN)
{
    doc = docIN;

    await sendRequest();

    doc.getElementById("fxUserName").innerText = user.name;
}

async function sendRequest()
{
    let response = await fetch('http://94.181.44.86:25565/api/getinfo/getprofile',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify({"body": "1935"})
        });

    parseResponse(await response.text());
}

function parseResponse(userJSON)
{
    user = JSON.parse(userJSON);
}

function getUser()
{
    return user;
}
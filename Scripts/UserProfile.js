let user;

async function sendRequest()
{
    let response = await fetch('http://94.181.44.86:25565/api/getinfo/getprofile',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify({"body": "1935"})
        });

    user = JSON.parse(await response.text());
}

function getUser()
{
    return user;
}
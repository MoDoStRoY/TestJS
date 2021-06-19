let doc;

async function sendMessage(docIN)
{
    doc = docIN;

    await getProfile();

    let body = doc.getElementById("fxMessageArea").value.toString();

    let response = await fetch('http://localhost:62993/api/messages/send',
        {
        method: 'POST',
        headers: {'Accept': 'text/pl',
            'Content-Type': 'application/json'},
        body: JSON.stringify({"dateTime": getCurrentAll(), "senderName": getUser().name, "body": body})
        });

    parseResponse(await response.text());
}

function parseResponse(listOfMessages)
{
    let parsedListOfMessages = JSON.parse(listOfMessages);

    updateUI(parsedListOfMessages);
}

function updateUI(listOfMessages)
{
    doc.getElementById("fxMessagesBox").value = "";
    doc.getElementById("fxMessageArea").value = "";

    for (let i = 0; i < listOfMessages.length; i++)
    {
        doc.getElementById("fxMessagesBox").value += listOfMessages[i].getString();
    }
}
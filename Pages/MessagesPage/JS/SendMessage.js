function sendMessage(doc)
{

    let xhr = new XMLHttpRequest();
    xhr.open("POST", `https://localhost:44349/api/Messages`, true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(doc.getElementById("fxMessageArea").textContent);

    xhr.onreadystatechange = function ()
    {
        doc.getElementById("fxMessagesBox").value = xhr.response;
        doc.getElementById("fxMessageArea").value = "";
    }
}
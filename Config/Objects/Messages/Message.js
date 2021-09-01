class Message
{
    dateTime;
    senderName;
    body;

    constructor(dateTime, senderName, body)
    {
        this.dateTime = dateTime;
        this.senderName = senderName;
        this.body = body;
    }

    getMessage()
    {
        return this.senderName + " " + this.dateTime + "\n" + this.body + "\n\n";
    }
}
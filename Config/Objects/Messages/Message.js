class Message
{
    public dateTime;
    public senderName;
    public body;

    constructor(dateTime, senderName, body)
    {
        this.dateTime = dateTime;
        this.senderName = senderName;
        this.body = body;
    }

    getString()
    {
        return this.senderName + " " + this.dateTime + "\n" + this.body + "\n\n";
    }
}
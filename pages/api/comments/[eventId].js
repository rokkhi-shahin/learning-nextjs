function handler(req, res) {
    const eventId = req.query.eventId;
    if (req.method === 'POST') {
        const { email, name, text } = req.body;
        if (
            !email ||
            !email.includes('@') ||
            email.trim() === '' ||
            !name ||
            name.trim() === '' ||
            text.trim() === '' ||
            !eventId
        ) {
            res.status(422).json({ message: "Some field missing or invalid" })
        }
        console.log(email, name, text, eventId);
        res.status(201).json({ message: 'Added comment' })
    }
    if (req.method === 'GET') {
        let dummyComment = [
            {
                id: new Date().getTime(),
                name: 'Maximilian',
                email: 'max@gmail.com',
                text: 'The event was really awesome. I enjoyed so much!'
            },
            {
                id: new Date().getTime(),
                name: 'Mosh',
                email: 'mosh@gmail.com',
                text: 'Experience from the event was great!'
            }
        ]
        console.log(eventId);
        res.status(200).json({ data: dummyComment })
    }
}
export default handler
import { MongoClient } from 'mongodb'
async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: "invalid email address" })
        }
        const client = await MongoClient.connect('mongodb+srv://nextjs_mongo:<root>@cluster0.isrjs.mongodb.net/learn_nextjs?retryWrites=true&w=majority');
        const db = client.db();
        await db.collection('comments').insertOne({ email: userEmail });
        client.close();
        console.log(userEmail)
        res.status(201).json({ message: 'Signed up!' })
    }
}

export default handler
import fs from 'fs';
import path from 'path';

export const buildFeedbackFilepath = ()=> path.join(process.cwd(), 'data', 'feedback.json');
export const extractFeedbackData = (filepath)=> {
    const fileData = fs.readFileSync(filepath);
    const parsedData = JSON.parse(fileData);
    return parsedData;
}
const handler = (req, res)=>{
    if(req.method === 'POST'){
       try {
        let {email, text} = req.body;
        let feedback = {
            id: new Date().getTime(),
            email,
            text
        }
        let filepath = buildFeedbackFilepath();
        const data = extractFeedbackData(filepath);
        data.push(feedback);
        fs.writeFileSync(filepath, JSON.stringify(data, null, 4));
        res.status(201).json({message:"feedback saved", data:feedback})  
       } catch (error) {
        res.status(400).json({message: 'feedback not saved'})
       }
    }
    if(req.method === 'GET') {
        let filepath = buildFeedbackFilepath();
        const data = extractFeedbackData(filepath);
        res.status(200).json({data})
    }
    res.status(404).send()
}

export default handler
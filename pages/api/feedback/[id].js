import { buildFeedbackFilepath, extractFeedbackData } from '../feedback'

const handler = (req, res)=>{
    if(req.method==="GET"){
        try {
            const {id} = req.query;
            const filePath = buildFeedbackFilepath();
            const feedbacks = extractFeedbackData(filePath);
            const feedback = feedbacks.find(feedback=>feedback.id==id);
            res.status(200).json({data:feedback});
        } catch (error) {
            res.status(400).json({message: 'something went wrong'})
        }
    }
    res.status(404).send()
}

export default handler
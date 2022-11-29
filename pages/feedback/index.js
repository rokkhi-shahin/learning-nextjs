import { buildFeedbackFilepath, extractFeedbackData } from "../api/feedback";
import Link from 'next/link'

const FeedbackPage = ({feedbacks})=>{
    return (
        <ul>
            {
                feedbacks.map(feedback=>(
                    <li key={feedback.id} style={{margin:'15px 5px'}}>
                        {feedback.text}
                        <Link href={`feedback/${feedback.id}`}><span style={{color:'blue', marginLeft:'10px', cursor:'pointer'}}>See details</span></Link>
                    </li>
                ))
            }
        </ul>
    )
}

export async function getStaticProps() {
    const filePath = buildFeedbackFilepath();
    const feedbacks = extractFeedbackData(filePath);
    return {
        props:{
            feedbacks
        }
    }
}

export default FeedbackPage
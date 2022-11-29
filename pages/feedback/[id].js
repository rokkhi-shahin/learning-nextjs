

const FeedbackDetailsPage = ({ feedback }) => {
    return (
        <div>
            <h1>{feedback.text}</h1>
            <h3>{feedback.email}</h3>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const protocol = context.req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = `${protocol}://${context.req.headers.host}`
    let res = await fetch(`${baseUrl}/api/feedback/${id}`);
    const feedback = await res.json().then(data=>data.data);
    return {
        props: { feedback }
    }
}

export default FeedbackDetailsPage;
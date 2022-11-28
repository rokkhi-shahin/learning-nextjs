function UserPage ({userName}){
    console.log(userName);
    return (
        <div>
            <h1>Hello, {userName}</h1>
        </div>
    )
}

export async function getServerSideProps(context){
    const { params, req, res } = context;
    console.log("server side");
    return {
        props: {
            userName: 'Maximilian'
        }
    }
}

export default UserPage;
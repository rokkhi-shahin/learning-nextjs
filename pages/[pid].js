import { readFile } from "fs/promises";
import path from "path";
import { Fragment } from "react";


function ProductDetailsPage({product}){
    return (
        <Fragment>
            <h1>{[product.title]}</h1>
            <p>{[product.description]}</p>
        </Fragment>
    )
}

export async function getStaticProps(context){
    const {params} = context;
    const productId = params.pid;
    const filepath = path.join(process.cwd(), 'data', 'dummy_data.json');
    const jsonData = await readFile(filepath);
    const data = JSON.parse(jsonData);
    const product = data.products.find(product=>product.id === productId);
    return {
        props:{
            product
        }
    }
}

export async function getStaticPaths (){
    const filepath = path.join(process.cwd(), 'data', 'dummy_data.json');
    const jsonData = await readFile(filepath);
    const data = JSON.parse(jsonData);
    const paths = data.products.map(product=>{
        return { params: {pid: product.id} }
    })
    return { 
        paths,
        fallback: 'blocking'
    }
}

export default ProductDetailsPage;

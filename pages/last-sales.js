import { useEffect, useState } from "react";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function LastSalesPage({initialSales}) {
    const [sales, setSales] = useState(initialSales)
    const { data, error } = useSWR('https://nextjs-course-prc-default-rtdb.firebaseio.com/sales.json', fetcher);
    useEffect(() => {
        if (data) {
            const transformedSales = [];
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                })
            }
            setSales(transformedSales)
        }
    }, [data])
    if (error) {
        return <p>Failed to load</p>
    }
    if (!data && !sales) {
        return <p>loading...</p>
    }
    return <ul>
        {
            sales.map(sale =>
                <li key={sale.id}>{sale.username} - {sale.volume}</li>
            )
        }
    </ul>
}

export async function getStaticProps() {
    let sales = await fetch('https://nextjs-course-prc-default-rtdb.firebaseio.com/sales.json')
        .then(response => response.json())
        .then(data => {
            const transformedSales = [];
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                })
            }
            return transformedSales
        })
    return {
        props:{
            initialSales: sales
        },
        revalidate: 10
    }

}

export default LastSalesPage;
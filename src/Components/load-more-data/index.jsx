import React, {useState, useEffect} from "react"

export default function LoadMoreData(){

    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try{
            fetchData();
        }
        catch(e){
            console.log(e);
        }
    }, [])


    async function fetchData(){
        const url = `https://dummyjson.com/products?limit=20&skip=
                    ${count === 0 ? 0 : count * 20}`
        try{
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();

            if(result){
                setProducts(result);
            }
            console.log(result);
            console.log(products);

        }
        catch(e){
            console.log(e);
            setLoading(false);
        }
    }
    if(loading){
        <div><p>Loading Data! Please Wait.</p></div>
    }
    return (<div>



    </div>)
}
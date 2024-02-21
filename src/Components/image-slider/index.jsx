import React, {useState} from "react";


export default function ImageSlider(url, limit, page){
    const [error, setError] = useState('');
    const [loading, setLoding] = useState(false);
    const [images, setImages] = useState([]);


    async function FetchImages(urlLink){
        try{
            setLoding(true);

            const response = await fetch(`${urlLink}?page${page}&limit=${limit}`)
            const data = response.json();

            if(data){
                setLoding(false);
                setImages(data);

            }
        }
        catch (e){
            setError(e.message);
            setLoding(false);

        }
    }



}
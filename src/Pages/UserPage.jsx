import React from "react";
import {useParams} from "react-router-dom";



export default function UserPage(){
    let {id} = useParams();
    retutn (
        <div>
            <h1>Hello there user {id}</h1>
            <p>This is your awesome User profile page</p>
        </div>
    )
}
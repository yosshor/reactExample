import React, {useEffect,useState} from "react";
import './DigitalClock.css'

export default function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {},[dependencies])

    return (
        <div className="colck-container">
            <div className="clock">
                <span>00:00:00</span>
            </div>

        </div>
    );

}
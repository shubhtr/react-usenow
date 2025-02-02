import { useState,useEffect } from "react";


function useNow(refreshFrequency) {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setNow(new Date()),
            refreshFrequency,
        );
        return () => clearInterval(interval);
    });

    console.log(now);

    return now;
}

export default useNow;


//
// The useEffect hook in this code is responsible for setting up and cleaning up a repeating interval 
// that updates the now state every refreshFrequency milliseconds. 
// 
// step by step:
//
// What useEffect is doing here?
//
// 1. Sets up a timer:
// setInterval is used to update the now state with the current time (new Date()) at the given refreshFrequency.
// 
// 2. Cleans up the timer when the component re-renders:
// The return function inside useEffect (() => clearInterval(interval)) ensures that the 
// previous interval is cleared before setting up a new one.
//
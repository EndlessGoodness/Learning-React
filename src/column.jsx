import { useEffect, useState } from 'react';
function Big(){
    const [cunter,setcount]=useState(0);
    useEffect(()=>{
        const key=setInterval(() => {
        setcount(cunt=>cunt+1)
        }, 1000);
        
        return ()=>{
            clearInterval(key);
        };
    },[])
    const bigstyle={
        display:"flex",
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent: 'space-between'
    }
    return (
        <div style={bigstyle}>
            <p>This is the left column</p>
            <p>This is the right column</p>
            <p>{cunter}seconds have passed</p>
        </div>
    );
}
export default Big;
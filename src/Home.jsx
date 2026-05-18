import { useState,useEffect ,useRef,useMemo,useCallback} from "react";
function Home(){
    const[count,setcount]=useState(0);
    const inputRef=useRef(null);
    const handleClick=()=>{console.log(inputRef.current.value)};
    const sqvalue=useMemo(()=>{
            return (count*count);
        },[count]);
    const message = useCallback(() => {
    console.log("useCallback running");
}, [count]);

    
    useEffect(function(){console.log("component rendered")},[count]
    )
    return(
    <div className= "bg-blue-200 grid text-red-700 border gap-5 text-center rounded mx-auto mx-w-xl m-20 p-5 w-100 h-150"> 
        <h1> HOME PAGE</h1>
        <h2>{count}</h2>
        <h2>{sqvalue}</h2>
        <input ref={inputRef} type="text" placeholder="type something" />
        <button onClick={handleClick}>Show Value</button>
        <button onClick={message} className="bg-black text-white">useCallback</button>
        <button onClick={()=>setcount(count+1)}className="bg-black text-white ">Increase</button>
        <button onClick={()=>setcount(count-1)}className="bg-black text-white ">decrease</button>
    <p> this is an example home page</p> 
    </div>);
};
export default Home;

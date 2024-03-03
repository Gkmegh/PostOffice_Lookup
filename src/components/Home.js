import axios from "axios";
import React, { useState } from "react";
import PostOfficeList from "./PostOfficeList";
import Loader from "./Loader";

const Home = ()=>{

    const [pincode, setPincode] = useState("");
    const [data, setData] = useState([]);
    const [togglePage, setTogglePage] = useState(false)
    const [isLoading, setLoading] = useState(true);
    const url = `https://api.postalpincode.in/pincode/${pincode}`

    async function fetchData () {
        try {
            if(pincode.length === 6){
                console.log("enter in axios")
            const response = await axios.get(url)
            setData(response.data)
            console.log(data)
            setTogglePage(true)
            setLoading(false)
            }
            else{
                alert("Please enter 6 digit pincode" )
            }

        } catch (err) {
            setLoading(false)
        }
    }
    function handleChnage(e){
        setPincode(e.target.value)
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    };

    return(
        <>
            {
                 togglePage ? ( 
                    <>
                        {
                            isLoading ? <Loader/> :  <PostOfficeList data={data} pincode={pincode}  />
                        }
                    </>
                ) : (
                    <div className="Home-page">
                        <h1 >Enter Pincode</h1>
                        <input type="number" placeholder="Pincode" value={pincode} onChange={handleChnage} inputMode="numeric" onKeyPress={handleKeyPress} />
                        <button onClick={fetchData} >Lookup</button>
                    </div>
                 ) 
                } 
        </>
    )
}

export default Home;
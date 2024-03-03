import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const PostOfficeList = ({data , pincode})=>{
    console.log("enter postoffice")    
    const [officeList, setOfficeList] = useState(data[0].PostOffice)
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(e){
        setSearchTerm(e.target.value)
    }
    useEffect(()=>{
        if(searchTerm !== ""){
            setOfficeList(officeList.filter(list=> list.Name.toLowerCase().includes(searchTerm.toLowerCase())))
        }
        else{
            setOfficeList(data[0].PostOffice)
        }
    }, [searchTerm])

    return(
        <>
            {
                officeList ? (
                    <div className="PostOfficeList">  
                        <h1>Pincode :{pincode} </h1>
                        <h1>Message : {data[0].Message}</h1>
                        <div className="Input-class"> 
                        <input placeholder="Filter" value={searchTerm} onChange={handleChange}   />
                         <IoIosSearch className="Icon"/>
                        </div>
                        <div className="OfficeListCards">
                        {
                            officeList.map((item, index)=>(
                                <div key={index} className="Office-card">
                                    <p>Name {item.Name}</p>
                                    <p>Branch Type {item.BranchType}</p>
                                    <p>Delivery Status {item.DeliveryStatus}</p>
                                    <p>District {item.District}</p>
                                    <p>State {item.State}</p>
                                </div>
                                ))
                        }
                        </div>
                    </div>
                ):(
                    <div className="PostOfficeList">
                        <h1>Pincode: {pincode} </h1>
                        <h1>Message: {data[0].Message}</h1>
                    </div>
                )
            }
        </>
    )
}

export default PostOfficeList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import {  GoogleLogout } from "react-google-login";



export default function Pagging(props) {
  const [responseData, setResponseData] = useState([]);
  const [isloading,setIsLoading] = useState(true)
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/search/shows?q=Vikings")
      .then(function (response) {
        setResponseData(response.data);
        setIsLoading(false)
        // console.log(responseData)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  // const logout = () => {
  // console.log("logout")
  // };
 
 
  return ( <div className="container">
    
    <GoogleLogout className="p-2"
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={()=>props.logout()}
    >
    </GoogleLogout>
    

    {isloading ? '...loading' :
    <div>
      <Posts postData={responseData[page]}/>
     
      <br></br>
      <div class="d-flex justify-content-around">
      {page === 0 ? (
       <div></div>
      ) : ( <button className="btn btn-primary" onClick={() => setPage(page - 1)}>
      previus
    </button>)}
    <b>{page+1} </b>
{page===responseData.length-1 ? null : ( <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        next
      </button>)}
      </div>
    </div>}


    </div>
  );
}

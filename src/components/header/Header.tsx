import React, { useState } from "react";
import "./header.css";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import InfoIcon from '@material-ui/icons/Info';
import { store } from "../../redux/store";
import { ActionType } from "../../redux/action-type";
export const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [isDarkModeOn , setIsDarkMode] = useState(false);
  const [isContactOpened , setIsContactOpened] = useState(false);
  const [email , setEmail] = useState("");
  const [firstName , serFirstName] = useState("");
  const [response , setResponse] = useState("")
  const [messageColor , setMessageColor] = useState("green");
  const [color , setColor] = useState(!isDarkModeOn ? "white" : "black")
  function check(){
    console.log(email , firstName)
    setEmail("");
    serFirstName("")
    
    if(firstName.length > 10 || email.indexOf("@") === -1){
      setMessageColor("red"); setResponse("Lo Sababa")} else
      {setResponse("Sababa"); setMessageColor("green"); setTimeout(()=> setIsContactOpened(false) , 5000);}
    setTimeout(()=> setResponse("") , 2000);

  }
  return (
    <div className="header">
      <h2 className="headerNameInfo"
      style={!isDarkModeOn ? {color : "white"} : { color : "black"}}> Shachar Ovadia </h2>

      <span
        className={!isDarkModeOn ? "options" : "optionsLighted"}
        onMouseEnter={() => setIsShown(true)}
        onClick={() => setIsShown(!isShown)}
      >
        <button>
          <i className={!isShown ? "fas fa-bars" : "fas fa-times"}></i>
        </button>
      </span>

      <li
        onMouseLeave={() => {setIsShown(false)}}
        className={isShown ? "table-header-shown" : "table-header-hidden"}
        style={!isDarkModeOn ? { color : "white"} : {color : "black" }}>

        <ul> <a href="#eleOne" style={!isDarkModeOn ? {color : "white"} : { color : "black"}}>About</a>  <span> <InfoIcon/> </span>  </ul>
        <ul>  <a href="#thirdElement" style={!isDarkModeOn ? {color : "white"} : { color : "black"}}> Contact <span> <ContactPhoneIcon style={{position: "relative" , left : "45px"}}/></span></a>  </ul>
        <ul>  <a href="#forthElement" style={!isDarkModeOn ? {color : "white"} : { color : "black"}}> Who Am I <span> <NotListedLocationIcon style={{position: "relative" , left : "22px"}}/></span></a>  </ul>
        <ul 
        style={{color : !isDarkModeOn ? color : color}}
        onMouseEnter={() => setColor(!isDarkModeOn ? "green" : "red")}
        onMouseLeave={() => setColor(!isDarkModeOn ? ("white") : ("black"))}
        onClick={() => {{setIsDarkMode(!isDarkModeOn)}; 
        store.dispatch({type : ActionType.setDarkModeState , payload : !store.getState().darkMode}); 
        sessionStorage.setItem("darkModeState" , isDarkModeOn.toString())}}>
        {isDarkModeOn ? "Dark Mode" : "Light Mode"} <span> <PowerSettingsNewIcon style={{color : color}}/>
        </span>  </ul>
      </li>

      <span style={isContactOpened ? {display : "block" , position : "fixed" , border : isDarkModeOn ? "solid rgba(0,0,0,0.3) 1px" : "solid rgba(255,255,255,0.3) 1px"} : {display : "none"}} className="contactMe">
      <i className="fas fa-times" style = {!isDarkModeOn ? {color : "white" } : { color : "black"}} onClick={()=> setIsContactOpened(false)}></i> <br/>
        <input type="text" placeholder="your First Name" style={!isDarkModeOn ? {backgroundColor :"white" , color : "black"} : {backgroundColor  : "black" , color : "white"}}  onChange={(e)=>serFirstName(e.target.value)} value={firstName}/> <br/>
        <input type="text" placeholder="yourEmail@....com" style={!isDarkModeOn ? {backgroundColor :"white" , color : "black"} : {backgroundColor  : "black" , color : "white"}} onChange={(e)=>setEmail(e.target.value)} value={email}/> <br/>
      <button style={!isDarkModeOn ? {backgroundColor :"rgba(255,255,255,0.3)" , color : "white"} : {backgroundColor  : "rgba(0,0,0,0.2)" , color : "black"}} onClick={check}> Connect With me </button>
      <p style={{color : messageColor}}>{response}</p>
      </span>
  
    </div>
  );
};

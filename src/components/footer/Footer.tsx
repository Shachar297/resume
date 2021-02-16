import { store } from "../../redux/store";
import "./footer.css";
export const Footer = () =>{
    
    return (
        <div className="footer"
        style={!store.getState().darkMode ? {backgroundColor : "black" , color : "white"} : {backgroundColor : "white" , color : "black"}}>
            <h6>Made By Shachar Ovadia </h6>
        </div>
    );
}

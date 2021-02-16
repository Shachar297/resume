// import { store } from "../../redux/store";
import { store } from "../../redux/store"
import AllInboxIcon from '@material-ui/icons/AllInbox';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import "./menu.css"
export const Menu = () => {
    return(
        <div className={store.getState().darkMode ? "menuLighted"  : "menu"}>

<a href="https://www.facebook.com/shachar.s.ovadia/" target="_blank"><i className="fab fa-facebook"> </i> </a>
<br/>
<a href="https://www.linkedin.com/in/shachar-ovadia-b22b71203/" target="_blank"><i className="fab fa-linkedin"></i> </a>
<br/>
<a href="mailto:thisishachar@gmail.com" target="_blank"> <AlternateEmailIcon/> </a>
<br/>
<a href="https://github.com/Shachar297" target="_blank"> <GitHubIcon/> </a>
<br/>
<a href="#thirdElement"> <AllInboxIcon/> </a>
        </div>
    )
}
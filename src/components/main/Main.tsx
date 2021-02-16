import "./main.css";
import myImg from "../../sources/Arrows_down_animated.gif";
import coinProject from "../../sources/coins-project.png";
import notesProject from "../../sources/notes-project.png";
import Calculator from "../../sources/Calculator.png";
import { Component } from "react";
import { Project } from "../../models/Project";
import ImagesProject from "../imagesProjects";
import { Card } from "@material-ui/core";
import { FrontEnd } from "../../models/frontEnd";
import { BackEnd } from "../../models/backEnd";
import { BackOffice } from "../../models/Backoffice";
import { store } from "../../redux/store";
import { Libraries } from "../../models/Libraries";
interface imageState {
  projectMap: Project[];
  frontEnds : FrontEnd[];
  backEnds : BackEnd[];
  backOffice : BackOffice[];
  lybraries : Libraries[];
  email : string;
  name : string;
}

export default class MainComponent extends Component<any, imageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      projectMap: [
        new Project("Coins-Project",coinProject,1,
          "https://github.com/Shachar297/Coins-Site",
          "https://shachar297.github.io/Coins-Site/"),

        new Project("Notes-Project",notesProject,2,
          "https://github.com/Shachar297/Notes",
          "https://shachar297.github.io/Notes/"),

          new Project("Calculator" , Calculator , 3 , "https://github.com/Shachar297/Calculator" , "https://shachar297.github.io/Calculator/")
      ],
      frontEnds : [
       new FrontEnd( 1 , "Javascript" ) ,
       new FrontEnd(2 , "React"),
       new FrontEnd(3 , "Angular"),
       new FrontEnd(4 , "Jquery")
      ],
      backEnds : [
        new BackEnd(1, "NodeJs"),
        new BackEnd(2, "PHP"),
        new BackEnd(3, "")
      ],
      backOffice : [
        new BackOffice(1, "SQL"),
        new BackOffice(2, "MongoDB")
      ],
      lybraries : [
        new Libraries(1, "React(Redux)") ,
        new Libraries(2, "React(axios)") ,
        new Libraries(3, "React(Hooks)") ,
        new Libraries(4, "React(Functional | Class Components)") ,
         new Libraries(5, "Angular(Observeable)"),
         new Libraries(6, "Angular(Services)")
      ],
      email : "",
      name : ""
    };
  }
private setChangeOnInputs = () => {
  console.log(this.state.name , this.state.email);
}
  public render() {
    return (
      <div className="main">
        <div className="firstElementInSight" id="firstElementInSight"
        style={!store.getState().darkMode ? {color : "white"} : {color : "black"}}>
          <h2 id="eleOne">
            {" "}
            So - as you might have guessed,
            <br /> My name is Shachar, I'm a FullStack Developer, Graduated From
            Jhon Bryce Academy <br />
            Currently, Im located in Jerusalem (borned and raised), But actualy,
            soon I'll re-locating to Tel-Aviv . <br />
          </h2>
<div className="myTechnologies">
<h2> Technologies : </h2> <br/>
<span className="frontEndH5" style={!store.getState().darkMode ? {border: "solid rgba(255, 255, 255, 0.2) 1px"} : {border : "solid rgba(0, 0, 0, 0.2) 1px"}}>
<h5>FrontEnd : </h5>
{this.state.frontEnds.map(fe => {return <ul key={fe.id}>{fe.tech},</ul>})}</span>
<span className="backEndH5" style={!store.getState().darkMode ? {border: "solid rgba(255, 255, 255, 0.2) 1px"} : {border : "solid rgba(0, 0, 0, 0.2) 1px"}}>
<h5 >BackEnd : </h5>
{this.state.backEnds.map(be => {return <ul key={be.id}>{be.tech}</ul>})} </span>

<span className="backOfiiceH5" style={!store.getState().darkMode ? {border: "solid rgba(255, 255, 255, 0.2) 1px"} : {border : "solid rgba(0, 0, 0, 0.2) 1px"}}>
<h5 >Database : </h5>
{this.state.backOffice.map(bo => {return <ul key={bo.id}>{bo.tech}</ul>})}</span>

<span className="libraryH5" style={!store.getState().darkMode ? {border: "solid rgba(255, 255, 255, 0.2) 1px"} : {border : "solid rgba(0, 0, 0, 0.2) 1px"}}>
  <h5> Libraries :  </h5>
  {this.state.lybraries.map(lib => {return <ul key={lib.id}>{lib.tech}</ul>})}
</span>
</div>
          <span className="ArrowDownNavigateSecondElement">
            {" "}
           <a href="#secondElement"> <button style={store.getState().darkMode ? {backgroundColor : "white"} : {backgroundColor : "black"}}>
              <img src={myImg} width={100} alt="ss" />
            </button></a>{" "}
          </span>
        </div>

        <span className="secondElement" id="secondElement" style={{ backgroundColor: "rgb(255, 255, 255,0)" ,  borderTop : !store.getState().darkMode ? "solid rgba(255,255,255,0.5) 1px" : "solid rgba(0,0,0,0.5) 1px"}}>
          {this.state.projectMap.map((image) => {
            return <ImagesProject key={image.id} projectMap={image} />;
          })}


        <span className="ArrowDownNavigatethirdElement">
            {" "}
           <a href="#thirdElement"> <button style={store.getState().darkMode ? {backgroundColor : "white"} : {backgroundColor : "black"}}>
              <img src={myImg} width={100} alt="ss" />
            </button></a>{" "}
          </span>
          </span>

        <div className="thirdElement" id="thirdElement" style={{ borderTop : !store.getState().darkMode ? "solid rgba(255,255,255,0.5) 1px" : "solid rgba(0,0,0,0.5) 1px"}}>
          <h2 style={{color : !store.getState().darkMode ? "white" : "black"}}> Leave Your Details :</h2>
            <input type="text" placeholder="Your Email... example@gmail.com" onChange={(e)=> this.setState({email : e.target.value})}/> <br/>
            <input type="text" placeholder="your First Name... " onChange={(e)=> this.setState({name : e.target.value})}/> <br/>
            <button onClick={this.setChangeOnInputs}
            style={{backgroundColor : !store.getState().darkMode ? "white" : "black"  , color : store.getState().darkMode ? "white" : "black"}}> Go </button>
    

        <span className="ArrowDownNavigateForthElement">
            {" "}
           <a href="#forthElement"> <button style={store.getState().darkMode ? {backgroundColor : "white"} : {backgroundColor : "black"}}>
              <img src={myImg} width={100} alt="ss" />
            </button></a>{" "}
          </span> 
             </div>


             <div className="forthElement" id="forthElement"  style={{color : !store.getState().darkMode ? "white" : "black" , borderTop : !store.getState().darkMode ? "solid rgba(255,255,255,0.5) 1px" : "solid rgba(0,0,0,0.5) 1px" }}>
          <h1> Who Am I : </h1>
          {/* MY IMG COMES HERE */}
<h4> So my name is Shachar Ovadia , I'm from Jerusalem , Israel. <br/> 
     I'm a FullStack web Developer, Graduated From John Bryce Academy  <br/>
     Mostly, i like working with React Js (TS) , But using also Angular Framework <br/>
     Also - Backend Using NodeJs , And you can see the Full List of my Technologies Usages by clicking <a href="#firstElementInSight" style={{color : !store.getState().darkMode ? "white" : "black"}}> Here</a> <br/>
     You can view my Github Page : <a href="https://github.com/Shachar297" target="_blank" style={{color : !store.getState().darkMode ? "white" : "black"}}> Here</a> <br/>
     {/* */}
     Also , I'm a musician , Guitar player and music producer, making Rap beats , Rock {"&"} Metal and world wide music. <a href="https://soundcloud.com/shachar-ovadia-478345553" target="_blank" style={{color : !store.getState().darkMode ? "white" : "black"}}> View My Soundcloud Profile </a> <br/>
     

</h4>
<span className="ArrowDownNavigateFirstElement">
            {" "}
           <a href="#firstElementInSight"> <button style={store.getState().darkMode ? {backgroundColor : "white"} : {backgroundColor : "black"}}>
              <img src={myImg} width={100} alt="ss" />
            </button></a>{" "}
          </span> 
             </div>
      </div>
    );
  }
}

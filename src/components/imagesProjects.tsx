import { Component } from "react";
import { Project } from "../models/Project";
import { store } from "../redux/store";

interface imageProps {
  projectMap: Project;
}

interface imageState {
  isButtonsShowed: boolean;
  opacity: number;
}
export default class ImagesProject extends Component<imageProps, imageState> {
  constructor(props: imageProps) {
    super(props);

    this.state = { isButtonsShowed: false, opacity: 0.5 };
  }

  private onImageHover = () => {
    this.setState({ opacity: 1 });
    this.setState({ isButtonsShowed: true });
  };

  private onMouseNotHover = () => {
    this.setState({ isButtonsShowed: false });
    this.setState({ opacity: 0.5 });
  };

  public render() {
    return (
        <div className={"secondElementInSight"} id={this.props.projectMap.name}>

        <a href={this.props.projectMap.projectLink} target="_blank" rel="noreferrer"  className={this.props.projectMap.name}>  <button
            onMouseOver={() => this.setState({isButtonsShowed : true})}
            style={
              !this.state.isButtonsShowed
                ? { display: "none" }
                : { display: "inherit" , position : "inherit"}} >
            {" "}
           Take Me There !{" "}
          </button></a> 

         <a href={this.props.projectMap.gitHubLinkCode} target="_blank" rel="noreferrer"  className={this.props.projectMap.name}> <button
           onMouseOver={() => this.setState({isButtonsShowed : true})}
           onMouseLeave={this.onMouseNotHover}
            style={
              !this.state.isButtonsShowed
                ? { display: "none" }
                : { display: "inherit" , position : "absolute"}}>
            {" "}
           See Code !{" "}
          </button></a>

          <img
            onMouseEnter={this.onImageHover}
            onMouseLeave={this.onMouseNotHover}
            src={this.props.projectMap.imageUrl}
            alt={this.props.projectMap.name}
            width={600}
            height={300}
            
            style={{ float: "left", opacity: this.state.opacity, position:"inherit" , border : !store.getState().darkMode ? "solid white 1px" : "solid black 1px" }}/>
            
        </div>

    );
  }
}

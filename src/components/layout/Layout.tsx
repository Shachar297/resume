import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import MainComponent from "../main/Main";
import { Menu } from "../menu/Menu";
import React, { Component } from "react";
import { Unsubscribe } from "redux";
import "./layout.css";
import { store } from "../../redux/store";
export default class Layout extends Component {
  private unsubscribestore: Unsubscribe;
  public constructor(props: any) {
    super(props);
    this.unsubscribestore = store.subscribe(() =>
      this.setState({
        darkMode: store.getState().darkMode,
      })
    );
  }
  componentWillUnmount() {
    this.unsubscribestore();
  }

  componentDidMount(){
    const body = document.body;
    body.style.backgroundColor = "black"
  }
  componentDidUpdate(){
      const body = document.body;
      {body.style.backgroundColor = !store.getState().darkMode ? "black" : "white"}
  }
  public render() {
    return (
      <section className={!store.getState().darkMode ? "layout" : "layoutLighted"}>
        <header>
          {" "}
          <Header />{" "}
        </header>

        <aside>
          {" "}
          <Menu />{" "}
        </aside>

        <main className="main">
          {" "}
          <MainComponent />{" "}
        </main>

        <footer>
          {" "}
          <Footer />{" "}
        </footer>
      </section>
    );
  }
}

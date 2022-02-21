import React, { Component } from "react";
import Chevron from "./Chevron";
// styles
import "./styles.scss";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.state = {
      active: "",
      height: "0px",
      rotate: "accordion-icon",
    };
  }

  toggleAccordion = () => {
    return this.setState({
      active: this.state.active === "" ? "active" : "",
      height:
        this.state.active === "active"
          ? "0px"
          : `${this.content.current.scrollHeight}px`,
      rotate:
        this.state.active === "active"
          ? "accordion-icon"
          : "accordion-icon rotate",
    });
  };

  render() {
    return (
      <>
        <h3>{this.props.heading}</h3>
        <div className="accordion-section">
          <button
            className={`accordion ${this.state.active}`}
            onClick={this.toggleAccordion}
          >
            <div className="accordion-title">{this.props.title}</div>
            <Chevron
              className={`${this.state.rotate}`}
              width={10}
              fill={"#777"}
            />
          </button>
          <div
            ref={this.content}
            style={{
              maxHeight: `${this.state.height}`,
            }}
            className="accordion-content"
          >
            <p
              className="accordion-text"
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Accordion;

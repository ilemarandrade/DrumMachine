import React from "react";
import { connect } from "react-redux";

class Accesory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationStatus: "off"
    };
    this.switcheHandler = this.switcheHandler.bind(this);
    this.libreryHandler = this.libreryHandler.bind(this);
  }

  switcheHandler() {
    this.props.pad.activation
      ? this.props.deactivatePad()
      : this.props.activatePad();
    this.setState(
      this.props.pad.activation
        ? { applicationStatus: "off" }
        : { applicationStatus: " on" }
    );
  }
  libreryHandler() {
    this.props.pad.librery === "bankOne"
      ? this.props.cambiarLibrery("bankTwo") && this.props.setTexto("bankTwo")
      : this.props.cambiarLibrery1("bankOne") && this.props.setTexto("bankOne");
  }

  componentDidUpdate() {
    let left = document.getElementById("apagado");
    let right = document.getElementById("encendido");
    let librery0 = document.getElementById("librery0");
    let librery1 = document.getElementById("librery1");
    if (this.props.pad.activation) {
      right.style.background = "blue";
      left.style.background = "black";
    } else {
      right.style.background = "black";
      left.style.background = "red";
    }
    if (this.props.pad.librery === "bankOne") {
      librery0.style.background = "blue";
      librery1.style.background = "black";
    } else {
      librery0.style.background = "black";
      librery1.style.background = "blue";
    }
  }
  render() {
    return (
      <div id="accesory">
        <div id="power" className="margin column perfectCentered">
          <p>Power</p>
          <div
            onClick={this.switcheHandler}
            className="switchP  perfectCentered"
          >
            <div id="apagado" className="switchLeft perfectCentered" />
            <div id="encendido" className="switchRight perfectCentered" />
          </div>
        </div>
        <div id="show" className="margin perfectCentered">
          <div id="display" className="perfectCentered">
            <p>{this.props.pad.show}</p>
          </div>
        </div>
        <div id="volumen" className=" margin perfectCentered">
          <div />
        </div>
        <div
          id="packSounds"
          className="margin column perfectCentered"
          onClick={this.libreryHandler}
        >
          <p>Bank</p>
          <div className="switchP  perfectCentered">
            <div id="librery0" className="switchLeft perfectCentered" />
            <div id="librery1" className="switchRight perfectCentered" />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  //leer del store o estado global;
  return {
    pad: store
  };
};
const mapDispatchToProps = dispatch => {
  return {
    activatePad: () => dispatch({ type: "On" }),
    deactivatePad: () => dispatch({ type: "Off" }),
    cambiarLibrery1: librery => dispatch({ type: "CHANGELIBRERY", librery }),
    cambiarLibrery: librery => dispatch({ type: "CHANGELIBRERY1", librery }),
    setTexto: texto => dispatch({ type: "NEWDISPLAY", texto })
  };
  //escribir o cambiar el estado global o store
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accesory);

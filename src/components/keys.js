import React from "react";
import { connect } from "react-redux";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.playSoundClick = this.playSoundClick.bind(this);
    this.playSoundPress = this.playSoundPress.bind(this);
  }
  componentDidMount() {
    function changeColor(id) {
      let ele = document.getElementById("sounds" + id);

      if (ele.style.background === "orange") {
        return (ele.style.background = "");
      }
      return (ele.style.background = "orange");
    }
    window.addEventListener("keydown", e => {
      let press = e.keyCode;
      let id = String.fromCharCode(press);
      switch (press) {
        case 81:
        case 87:
        case 69:
        case 65:
        case 83:
        case 68:
        case 90:
        case 88:
        case 67:
          changeColor(id);
          this.playSoundPress(id);
          break;
        default:
      }
    });
    window.addEventListener("keyup", e => {
      let press = e.keyCode;
      let id = String.fromCharCode(press);
      switch (press) {
        case 81:
        case 87:
        case 69:
        case 65:
        case 83:
        case 68:
        case 90:
        case 88:
        case 67:
          changeColor(id);
          break;
        default:
      }
    });
  }

  playSoundClick(e) {
    let reproducir = document.getElementById(e.target.id[6]);
    reproducir.currentTime = 0;
    this.props.pad.activation && reproducir.play();
    let nameSound =
      this.props.pad.librery === "bankOne"
        ? bankOne.filter(ele => ele.keyTrigger === e.target.id[6])
        : bankTwo.filter(ele => ele.keyTrigger === e.target.id[6]);
    this.props.setTexto(nameSound[0]["id"]);
  }
  playSoundPress(id) {
    let reproducir = document.getElementById(id);
    reproducir.currentTime = 0;
    this.props.pad.activation && reproducir.play();
    let nameSound =
      this.props.pad.librery === "bankOne"
        ? bankOne.filter(ele => ele.keyTrigger === id)
        : bankTwo.filter(ele => ele.keyTrigger === id);
    this.props.setTexto(nameSound[0]["id"]);
  }
  render() {
    const librery = this.props.pad.librery === "bankOne" ? bankOne : bankTwo;
    const divSounds = librery.map((ele, i) => (
      <div
        key={i}
        id={"sounds" + ele["keyTrigger"]}
        className="drum-pad"
        onClick={this.playSoundClick}
      >
        <audio
          key={i}
          className="clip"
          id={ele["keyTrigger"]}
          src={ele["url"]}
          preload="auto"
        />
        {ele["keyTrigger"]}
      </div>
    ));
    return <div id="keys">{divSounds}</div>;
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
    setTexto: texto => dispatch({ type: "NEWDISPLAY", texto })
  };
  //escribir o cambiar el estado global o store
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

// const copiaObjeto = JSON.parse(JSON.stringify(estadoInicial)); //clonado profundo ...multiples niveles
// Object.assign({}, estadoInicial, nuevoObject); //clonado profundo

import { combineReducers } from "redux";

// const copiaObjeto = { ...estadoInicial }; //clonado superficial, un solo nivel

//estado inicial

/**
 * {
    isActive:false,
  }
 */

//cuando recibo action de enceder

/**
  * 
  {
     isActive:true,
  }
  */
const estadoInicial = {
  isActive: false,
  librery: "bankOne",
  show: ""
};

function activationReducer(state = estadoInicial.isActive, action) {
  let newState = state;
  switch (action.type) {
    case "On": {
      //string Action
      newState = true;
      break;
    }
    case "Off": {
      newState = false;
      break;
    }
    default:
      break;
  }

  return newState;
}
function changeLibrery(state = estadoInicial.librery, action) {
  let newState = state;
  switch (action.type) {
    case "CHANGELIBRERY1": {
      //string Action
      newState = action.librery;
      break;
    }
    case "CHANGELIBRERY": {
      //string Action
      newState = action.librery;
      break;
    }
    default:
      break;
  }
  return newState;
}

function mostrarBotonPresionado(state = estadoInicial.show, action) {
  let newState = state;
  switch (action.type) {
    case "NEWDISPLAY": {
      newState = action.texto;
      break;
    }
    default:
      break;
  }
  return newState;
}
const reducerPrincipal = combineReducers({
  activation: activationReducer,
  librery: changeLibrery,
  show: mostrarBotonPresionado
});
export default reducerPrincipal;

// function cualquiera(parametro = "algo") {//parametros por default
//   console.log(parametro);
// }

// cualquiera(); //

// cualquiera("nuevo"); //

import reducerPrincipal from "./reducers";
import { createStore } from "redux";
const store = createStore(reducerPrincipal);
export default store;

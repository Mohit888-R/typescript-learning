"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function props(props) {
    return (<>
      {props.isLoggedIn ? (<div>
          Props Name is : <b>{props.name}</b> & length of props name is :<b>{props.Namelength}</b>
        </div>) : (<div>Welcome, guest user</div>)}
    </>);
}
exports.default = props;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function PersonsList(props) {
    return (<>
      <div>
        {props.names.map((items) => (<h2 key={items.first}>
                {items.first} {items.last}
                </h2>))}
      </div>
    </>);
}
exports.default = PersonsList;

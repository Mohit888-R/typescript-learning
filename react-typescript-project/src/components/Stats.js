"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Stats(props) {
    let status;
    if (props.status === 'loading')
        status = 'loading...';
    else if (props.status === 'success')
        status = 'Data is fetching!!! ';
    else
        status = 'error';
    return (<div>Status - {status}</div>);
}
exports.default = Stats;

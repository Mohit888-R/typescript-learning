"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Props_1 = __importDefault(require("./components/Props"));
const PersonsList_1 = __importDefault(require("./components/PersonsList"));
const Stats_1 = __importDefault(require("./components/Stats"));
const Heading_1 = __importDefault(require("./components/Heading"));
const NewTag_1 = __importDefault(require("./components/NewTag"));
function App() {
    let name = "Mohit";
    let userAuth = true;
    let NameList = [
        {
            first: "John",
            last: "Doe"
        },
        {
            first: "Rahina",
            last: 'malik'
        },
        {
            first: "Abhishek",
            last: "malan"
        }
    ];
    return (<div className="App">
      <Props_1.default name="mohit" isLoggedIn={userAuth}/>
      <PersonsList_1.default names={NameList}/>
      <Stats_1.default status="loading"/>
      <Heading_1.default>This is Heading section.</Heading_1.default>
      <NewTag_1.default>
        <Heading_1.default>This is new Tag</Heading_1.default>
      </NewTag_1.default>
    </div>);
}
exports.default = App;

function componentApp() {
  //1) Standart h1 Elemt in React
  let title = React.createElement(
    "h1",
    {
      key: "headerApp",
      style: { color: "red", border: "1px solid black" },
      id: "headApp"
    },
    "App Header"
  );

  //02) Inner Component
  let sub = React.createElement(componentSub, { key: "subComp1" }, null);

  //03) Create Div Element with inner element as children Children
  //-title simple element
  //-inner componentSub component
  let divContainer = React.createElement(
    "div",
    { style: { border: "1px solid black" } },
    [title, sub]
  );

  //return upLevel Element
  return divContainer;
}

function componentSub() {
  //standart javaScript
  // let pElement = React.createElement("p",
  //  {style:{color:'red',border:'1px dashed red'},onClick:(e)=> alert('Sub Alert')},
  //"Sub Comp");
  //return pElement;

  //JSX Syntax
  return (
    <p
      style={{ color: "red", border: "1px dashed red" }}
      onClick={e => alert("JSX ALERT")}
    >
      Click Me
    </p>
  );

  //JSX
  //return (
  //<button onClick={() => alert("AAAA")}>
  //Click me
  //</button>
  // );
}

const htmlRoot = document.getElementById("root");
let appComponent = React.createElement(componentApp, {}, null);
ReactDOM.render(appComponent, htmlRoot);

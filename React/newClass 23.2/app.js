function pComponent(props) {
  let p1Element = React.createElement(
    "p",
    {
      id: "p1",
      key: "p1",
      onClick: () => {
        alert("HELLO React");
      }
    },
    "React Can Be Very Easy"
  );
  return p1Element;
}

function myComponent(props) {
  //Create React Element
  let h1Element = React.createElement(
    "h1",
    {
      id: "header",
      style: { color: props.myColor, background: "black" },
      key: "header1"
    },
    props.myMsg,
    "My Title"
  );
  //   let p1Element = React.createElement(
  //     "p",
  //     {
  //       id: "p1",
  //       key: "p1",
  //       onClick: () => {
  //         alert("HELLO React");
  //       }
  //     },
  //     "React Can Be Very Easy"
  //   );
  let innerComponent = React.createElement(
    pComponent,
    { key: "innerCom" },
    null
  );
  let divElement = React.createElement("div", { id: "divContainer" }, [
    h1Element,
    innerComponent
  ]);
  return divElement;
}

let funcComponent = React.createElement(
  myComponent,
  { myMsg: "header1 ", myColor: "blue" },
  null
);
let funcComponent2 = React.createElement(
  myComponent,
  { myMsg: "header2 ", myColor: "red" },
  null
);

//Get root element by ID (HTML API)
let rootContainer = document.querySelector("#root");
let rootContainer2 = document.querySelector("#root2");

//Render React Element in container
ReactDOM.render(funcComponent, rootContainer);
ReactDOM.render(funcComponent2, rootContainer2);

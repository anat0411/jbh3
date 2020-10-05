function pComponent(props) {
  let pElement = React.createElement(
    "p",
    {
      id: "p1",
      key: "p1",
      onClick: e => {
        alert("HELLO REACT");
      }
    },
    "React Can Be Very Simple"
  );
  return pElement;
}

// ONCLICK- WHEN WE CLICK THE LINE :React Can Be Very Simple, WE GET THE ALERT OF HELLO REACT

//PROPS -יצירת פרמטרים לפונקציה
// let pElement (הצהרה על משתנה
//React.createElement("p"- p = האלמנט שנוצר
// בתוך ה-p there are the P values :ID and KEY

function MyComponent(props) {
  let h1Element = React.createElement(
    "h1",
    {
      id: "header1",
      key: "header1",
      style: { color: props.myColor, background: "black" }
    },
    props.myMsg
  );
  let pElement = React.createElement(
    "p",
    {
      id: "p1",
      key: "p1",
      onClick: e => {
        alert("HELLO REACT");
      }
    },
    "React Can Be Very Simple"
  );
  let innerComponent = React.createElement(pComponent, { key: "inner" }, null);
  let divElement = React.createElement("div", { id: "divContainer" }, [
    h1Element,
    innerComponent
  ]);
  return divElement;
}

// הפונקציה myComponent +props= PROPS -יצירת פרמטרים לפונקציה
// משתנה ראשון h1.
//זה מה שהפונקציה תעשה

// השלב הבא יצירת האלמנטים מהפונקציה ב-ui

//Create React Element -יצירת האלמנטים מהפונקציה באתר
let h1Element = React.createElement(
  "h1",
  {
    id: "header1",
    key: "header1",
    style: { color: "red", background: "black" }
  },
  "Hello React Element"
);
let pElement = React.createElement(
  "p",
  {
    id: "p1",
    key: "p1",
    onClick: e => {
      alert("HELOW REACT");
    }
  },
  "React Can Be Very Simple"
);
let divElement = React.createElement("div", { id: "divContainer" }, [
  h1Element,
  pElement
]);

//Get Root Element By ID(document API)
let rootContainer = document.querySelector("#root"); // THE NAME OF THE DIV THAT THE INFO WILL GO INTO

//Component
let funComponent = React.createElement(
  MyComponent,
  { myMsg: "Header1", myColor: "red" },
  null
); //SHOW HEADER 1 IN RED
//Render React Element in Container
//Get The Method And Render from It The Component
ReactDOM.render(funComponent, rootContainer); // SHOW IN THE UI :React Can Be Very Simple.

//Get Root Element By ID(document API)
let root2Container = document.querySelector("#root2"); // THE NAME OF THE DIV THAT THE INFO WILL GO INTO
//Component
let funComponent2 = React.createElement(
  MyComponent,
  { myMsg: "Header", myColor: "grey" },
  null
);
//Render React Element in Container
//Get The Method And Render from It The Component
ReactDOM.render(funComponent2, root2Container); //SHOW IN UI GREY HEADER WITH BLACK BACKGROUND,
//AND THE MSG :React Can Be Very Simple

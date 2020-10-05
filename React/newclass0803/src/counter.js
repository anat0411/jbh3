class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterVal: -1
    };
  }
  add() {
    //left side is defined, right side is the new value
    this.setState({ counterVal: this.state.counterVal + 1 });
    //03
    //bind connencts the info to the button, so when you use "this" it will be related to the class and not to the button inself
    // this.addOne = this.addOne.bind(this,null);
  }
  //02
  //   add = () => {
  //     this.setState({ counterVal: this.state.counterVal + 1 });
  //   };

  //03
  //   addOne() {
  //     this.setState({ counterVal: this.counterVal + 1 });
  //   }

  render() {
    return (
      <div>
        <h1>{this.state.counterVal}</h1>
        <button onClick={e => this.add()}>Add</button>
        {/* <button onClick={this.add}>Add</button> //02*/}
        {/* <button onClick={this.addOne}>Add</button> //03*/}
      </div>
    );
  }
}

let rootDiv = document.querySelector("#root");
ReactDOM.render(<Counter />, rootDiv);

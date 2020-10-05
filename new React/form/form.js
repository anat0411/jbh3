class OuterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  notifyHandler = msg => {
    //SETSTATE  which Impact children after SET STATE
    alert(msg);
  };

  render() {
    return (
      <div>
        <Form key="frame1" outerNotify={this.notifyHandler}></Form>
        <Form key="frame2" outerNotify={this.notifyHandler}></Form>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "4",
      text1: "XXX",
      text2: "YYY"
    };

    //enable to use this form instead fo this
    this.submit = this.submit.bind(this);
    this.selectChanged = this.selectChanged.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <select value={this.state.value} onChange={this.selectChanged}>
          <option value="1">Item 01</option>
          <option value="2">Item 02</option>
          <option value="3">Item 03</option>
          <option value="4">Item 04</option>
        </select>
        <input
          onChange={this.textChanged}
          type="text"
          name="text1"
          value={this.state.text1}
        ></input>
        <input
          onChange={this.textChanged}
          type="text"
          name="text2"
          value={this.state.text2}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    );
  }

  //submit form
  submit(e) {
    var innerData =
      "Select data: " +
      this.state.value +
      " num. Input data 1: " +
      this.state.text1 +
      ". Input data 2: " +
      this.state.text2;
    //Call parent callback
    this.props.outerNotify(innerData);
    e.preventDefault();
  }

  //Select element changed
  //Update state
  selectChanged(e) {
    let val = e.target.value;
    this.setState({ value: val });
  }

  textChanged(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
}
let rootElement = document.getElementById("root");
ReactDOM.render(<OuterComponent></OuterComponent>, rootElement);

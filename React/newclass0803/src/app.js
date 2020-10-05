let studentsJsonData = [
  { id: 1, name: "Moshe", grade: 50 },
  { id: 2, name: "Rom", grade: 70 },
  { id: 3, name: "Dan", grade: 90 },
  { id: 4, name: "Lior", grade: 80 },
  { id: 5, name: "Tomer", grade: 40 },
  { id: 6, name: "Raz", grade: 20 },
  { id: 7, name: "Noam", grade: 95 }
];

class Students extends React.Component {
  constructor(props) {
    super(props);
    //code
  }
  render() {
    return (
      <div>
        <h1>Students List: ({this.props.data.length})</h1>
        {this.props.data.map((student, i) => {
          return (
            <Student
              key={student.id}
              id={student.id}
              studentname={student.name}
              grade={student.grade}
            ></Student>
          );
        })}
      </div>
    );
  }
}

class Student extends React.Component {
  constructor(props) {
    super(props);
    //code
  }
  render() {
    let { id, studentname, grade } = this.props;
    const studentStyle = { border: "1px dashed darkgrey", color: "blue" };

    let gradeObj = this.getGradeDisplay(grade);

    return (
      <ul style={studentStyle}>
        <li>id: {id}</li>
        <li>Student Name: {studentname}</li>
        <li
          style={gradeObj.color}
        >{`grade: ${grade} , ${gradeObj.gradeTxt}`}</li>
      </ul>
    );
  }

  getGradeDisplay(grade) {
    let gradeRes = {};
    if (grade >= 0 && grade < 60) {
      gradeRes.gradeTxt = "failed";
      gradeRes.color = { color: "red" };
    } else if (grade >= 60 && grade < 80) {
      gradeRes.gradeTxt = "good";
    } else if (grade >= 80 && grade <= 100) {
      gradeRes.gradeTxt = "great";
      gradeRes.color = { color: "green" };
    }
    return gradeRes;
  }
}

let rootDiv = document.querySelector("#root");
ReactDOM.render(<Students data={studentsJsonData}></Students>, rootDiv);

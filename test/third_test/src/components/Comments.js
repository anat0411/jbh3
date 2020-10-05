import React, { Component } from "react";

export default class Comments extends Component {
  state = {
    comments: [],
    commentText: "",
  };

  getComments = async () => {
    const url = `http://localhost:3001/comments/${this.props.id}`;
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    const resJson = await res.json();
    console.log(resJson);
    console.log(url);
    this.setState({ comments: resJson });
  };

  componentDidMount() {
    this.getComments();
  }

  addComment = async (data) => {
    const url = `http://localhost:3001/comments/${this.props.id}`;
    const commentTime = new Date();
    data.commentTime = commentTime;
    console.log(data);
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    res.json().then((data) => {
      const { commentText } = this.state;
      console.log(data);
      const id = data;
      const tempComments = this.state.comments;
      const comment = {
        commentOnGame: this.props.id,
        commentText,
        commentTime: this.getDate(),
        id,
      };
      tempComments.push(comment);
      this.setState({ comments: tempComments });
    });
  };
  handleChange = (e) => {
    this.setState({ commentText: e.target.value });
  };

  getDate = () => {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate();
    console.log(formatted_date);
    return formatted_date;
  };
  render() {
    const { comments } = this.state;
    console.log(comments);
    return (
      <div>
        <h5>Comments</h5>
        {this.state.comments.map((comment) => (
          <div key={comment.id}>
            {comment.commentText}, {comment.commentTime}
          </div>
        ))}
        <form className="form-group">
          <hr />
          <label htmlFor="message">Type your comment below</label>
          <textarea
            className="form-control"
            id="messgae"
            required
            onChange={this.handleChange}
          ></textarea>
        </form>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.addComment({
              inputData: [
                [this.props.id, this.state.commentText, this.getDate()],
              ],
            });
          }}
        >
          Comment
        </button>
      </div>
    );
  }
}

import React from "react";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
      isSaved: false,
    };
  }

  render() {
    return (
      <p className={this.state.isSaved ? "saved" : ""}>
        Hi. My number is {this.state.num}.{" "}
        <button onClick={this.saveNum}>Click to remember me</button>
      </p>
    );
  }
}

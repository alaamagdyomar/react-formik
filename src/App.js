import React from "react";
import "./App.css";
import SignInOutContainer from "./containers";
// import InviteFriends from "./components/addFriend";
// import TrafficLight from "./components/trafficLight";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SignInOutContainer />
        {/* <InviteFriends /> */}
        {/* <TrafficLight /> */}
      </div>
    );
  }
}

export default App;

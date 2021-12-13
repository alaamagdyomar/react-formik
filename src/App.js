import React from "react";
import "./App.css";
// import HandleColumn from "./components/Table/columns";
import RenderTable from "./components/Table/indes";

// import SignInOutContainer from "./containers";
// import InviteFriends from "./components/addFriend";
// import TrafficLight from "./components/trafficLight";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="table">
          <RenderTable />
          {/* <HandleColumn /> */}
        </div>
        {/* <SignInOutContainer /> */}
        {/* <InviteFriends /> */}
        {/* <TrafficLight /> */}
      </div>
    );
  }
}

export default App;

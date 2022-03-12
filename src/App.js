import React from "react";
import "./App.css";
import Fetch from "./components/hooks/fetch/Fetch";
// import HandleColumn from "./components/Table/columns";
// import RenderTable from "./components/Table/indes";
// import Charts from "./components/charts";
// import SignInOutContainer from "./containers";
// import InviteFriends from "./components/addFriend";
// import TrafficLight from "./components/trafficLight";
// import Visual from "./components/visualization";
// import Hooks from "./components/hooks/form/Hooks";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="table">
          <Fetch />
          {/* <Hooks /> */}
          {/* <Visual /> */}
          {/* <RenderTable /> */}
          {/* <HandleColumn /> */}
          {/* <Charts /> */}
        </div>
        {/* <SignInOutContainer /> */}
        {/* <InviteFriends /> */}
        {/* <TrafficLight /> */}
      </div>
    );
  }
}

export default App;

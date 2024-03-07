import { MyButtonWithState } from "./MyButtonWithState";

export  function StateExample() {
    return (
      <div>
        <h1>Counters that update separately</h1>
        <MyButtonWithState />
        <MyButtonWithState />
      </div>
    );
  }
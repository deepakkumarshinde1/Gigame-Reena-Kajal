import { Component } from "react";

class ClComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      ...props,
    };
  }

  componentDidMount() {
    console.log("Mounting");
  }

  componentDidUpdate() {
    console.log("Update");
  }

  shouldComponentUpdate(newProps, newState) {
    if (newState.count === 10) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUnmount() {}
  componentDidCatch() {}

  render() {
    return <div>ClComp</div>;
  }
}

export default ClComp;

import { Component } from "react";
import Votingtable from "./Votingtable";
class App extends Component {
  render() {
    return (
      <span>
        <h2 class="heading">Voting</h2>
        <Votingtable language="C" />
        <Votingtable language="C++" />
        <Votingtable language="Java" />
        <Votingtable language="Python" />
      </span>
    );
  }
}
export default App;

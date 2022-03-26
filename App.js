import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div class="table">
          <table>
            <div class="title">
              <h1>Contact Us</h1>
            </div>
            <tr>
              <td>
                <label>First Name</label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>Last Name</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>

            <tr>
              <td>
                <label>Email</label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>Phone</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>
            <tr>
            </tr>
          </table>
          <table>
            <tr>
              <label>Address</label>
              <br />
              <input type="text" size={66}></input>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <label>City</label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>State</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>ZIP code </label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>Country</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>
          </table>
          <table>
            <tr>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
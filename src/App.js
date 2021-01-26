import "./styles.css";
import Profile from "./Profile.js";
import Interests from "./Interests.js";
import Learn from "./Learn.js";
import Expectations from "./Expectations.js";
import Hobbies from "./Hobbies.js";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Ejercicio</h1>
        <div class="row">
          <Profile />
          <Interests />
          <Learn />
          <Expectations />
          <Hobbies />
        </div>
      </div>
    </div>
  );
}

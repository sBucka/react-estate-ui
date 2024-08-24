import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/homePage/homePage";

function App() {
  return (
    <div className="layout">
      <div class="navbar">
        <Navbar></Navbar>
      </div>
      <div class="content">
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;

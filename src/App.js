import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="p-4 md:p-8 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen font-poppins">
        <Hero/>
        <About/>
      </div>
    </>
  );
}

 {/* <div className="homebody">
                <Link className="link" to='/login'><button className="btn">Login</button></Link>

                <Link className="link" to="./signin"><button className="btn">SignIn</button></Link>

                <Link className="link" to="./about"><button className="btn"> About</button></Link>

                <h2 className="name">{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>

            </div> */}
export default App;

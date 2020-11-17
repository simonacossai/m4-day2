import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import Books from "./components/LatestBooks/Books";


function App() {
  return (
       <>
        <Navbar title="Strive" />
        <Welcome/>
        <Books/>
        <Footer />
      </>
  );
}

export default App;

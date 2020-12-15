import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import Books from "./components/LatestBooks/Books";
import AddComment from './components/CommentArea/AddComment/AddComment';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
       <>
       <Router>
        <Navbar title="Strive"/>
        <Route
            path="/"
            exact
            render={(
              props 
            ) => <Welcome {...props}/>} 
          />        
           <Route
            path="/addcomment/:id"
            exact
            render={(
              props 
            ) => <AddComment {...props}/>} 
          />        
        </Router>
      </>
  );
}

export default App;

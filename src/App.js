import './App.css';
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import HomePagePicture from './components/HomePagePicture'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className = "Content">
        <HomePagePicture />
      </div>
    </div>
  );
}

export default App;

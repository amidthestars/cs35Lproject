import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Playlists from "./components/Playlists";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={code ? <Dashboard code={code} /> : <Login />}
                />
                <Route exact path="home" element={<HomePage />} />
                <Route exact path="play" element={<Playlists />} />
            </Routes>
        </Router>
    );
}

export default App;

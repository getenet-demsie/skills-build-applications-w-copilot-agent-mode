import logo from './octofitapp-small.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <img src={logo} alt="OctoFit Logo" className="App-logo" />
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/activities" element={<CardWrapper><Activities /></CardWrapper>} />
            <Route path="/leaderboard" element={<CardWrapper><Leaderboard /></CardWrapper>} />
            <Route path="/teams" element={<CardWrapper><Teams /></CardWrapper>} />
            <Route path="/users" element={<CardWrapper><Users /></CardWrapper>} />
            <Route path="/workouts" element={<CardWrapper><Workouts /></CardWrapper>} />
            <Route path="/" element={<CardWrapper><h1 className="display-4 text-primary">Welcome to OctoFit Tracker</h1></CardWrapper>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
// Bootstrap card wrapper for main content
const CardWrapper = ({ children }) => (
  <div className="card mt-4">
    <div className="card-body">
      {children}
    </div>
  </div>
);
}

// Bootstrap card wrapper for main content
const CardWrapper = ({ children }) => (
  <div className="card mt-4">
    <div className="card-body">
      {children}
    </div>
  </div>
);
export default App;

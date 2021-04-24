import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Landing from './pages/Landing';
import BlogTest from './pages/BlogTest';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/leotartarini' exact component={Landing} />
          <Route path='/leotartarini/blog' exact component={BlogTest} />
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

// Pages
import Landing from './pages/Landing';
import BlogTest from './pages/BlogTest';

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { blogid } = useParams();

  return (
    <div>
      <h3>ID: {blogid}</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/leotartarini' exact component={Landing} />
          {/* <Route path='/leotartarini/blog' exact component={BlogTest} /> */}
          <Route path='/leotartarini/:blogid' exact component={BlogTest} />
      </Router>
    </div>
  );
}

export default App;

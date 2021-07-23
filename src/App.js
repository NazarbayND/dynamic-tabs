import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';

//Import module/page components to be routed:
import Home from './pages/Home';
import SQA from './Sections/ENG/SQA/SQA';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      
      <div className="module-container">
      <Switch> 
          {/* Add which component should be rendered at what path:  */}
          <Route exact path="/" component={Home}/>
          <Route path="/sqa" component={SQA}/>
          
          <Route path="*"> <NoMatch /> </Route> {/* Should stay as the last route*/}
         
      </Switch>
      </div>

      </Router>
    </div>
  );
}

export default App;


function NoMatch() { //temporary handling of non-existent urls, change it in the future or get rid of it
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./components/LandingPage/mainPage/mainPage";
import OurTeam from "./components/our team/ourTeam";
//import Menu from './components/nav-header/menu';
import ContactUs from "./components/Contact Us/contactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConditionAssessment from "./components/ConditionAssessment/ConditionAssessment";
import FireDamagedStructures from "./components/FireDamagedStructures/FireDamagedStructures";
import ProofChecking from "./components/ProofChecking/ProofChecking";
import Strengthening from "./components/Strengthening/Strengthening";
import HeritageStructures from "./components/HeritageStructures/HeritageStructures";
import HighwaysBridges from "./components/HighwaysBridges/HighwaysBridges";
import PowerStructures from "./components/PowerStructures/PowerStructures";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Ourteam" component={OurTeam} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/ConditionAssessment" component={ConditionAssessment } />
          <Route path="/FireDamagedStructures" component={FireDamagedStructures } />
          <Route path="/ProofChecking" component={ProofChecking } />
          <Route path="/Strengthening" component={Strengthening } />
          <Route path="/HeritageStructures" component={HeritageStructures } />
          <Route path="/HighwaysBridges" component={HighwaysBridges } />
          <Route path="/PowerStructures" component={PowerStructures } />
          {/*<Route path="/menu" component={Menu} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BrandDetails from './pages/BrandDetails';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ReviewForm from './pages/ReviewForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Header />
      <Container>
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/review" component={ReviewForm} />
        <Route path="/details/:id" component={BrandDetails} />
      </div>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

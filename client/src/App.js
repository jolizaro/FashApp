import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BrandDetails from './pages/BrandDetails';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listBrands } from './actions/brandActions';
import AddBrand from './pages/AddBrand';
import UpdateBrand from './pages/UpdateBrand';



function App() {
  const dispatch = useDispatch();
  const brandList = useSelector(state => state.brandList);
  const { brands, loading, error } = brandList;
  useEffect(() => {
      dispatch(listBrands());
  }, [dispatch])
  return (
    <Router>
      <Header />
      <Container>
      <div className="App" style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addbrand" component={AddBrand} />
        <Route path="/details/:id" component={BrandDetails} />
        <Route path="/update/:id" component={UpdateBrand} />
      </div>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

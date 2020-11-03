// import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />                  
          <Route path="/product/:id" component={ProductPage} />                  
          {/* <Route exact path="/" component={HomePage} />                   */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Collections from "./components/pages/Collections";
import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Details from "./components/pages/Details";




function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/collection" element={<Collections  />} />
        <Route exact path="/collection/:Category/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>

    </Provider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./screen/HomePage";
import Header from "./components/Header";
import Login from "./screen/regLogin/Login";
import Register from "./screen/regLogin/Register";
import Logout from "./screen/regLogin/Logout";
import CartScreen from "./screen/cartScreen/CartScreen";
import OrderPage from "./screen/OrderPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/cartpage" element={<CartScreen />} />
          <Route exact path="/order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

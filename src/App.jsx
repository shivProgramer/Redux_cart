import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";
import Header from "./components/Header";
import CartPage from "./components/CartPage";

Routes;
function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/cart/:Id" element={<CardDetails/>}/>
        <Route path="/cartpage" element={<CartPage/>}/>
      </Routes>
    </>
  );
}
export default App;
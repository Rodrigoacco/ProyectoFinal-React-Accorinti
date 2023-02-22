import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
        <Destacado />
        <PromoApp />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

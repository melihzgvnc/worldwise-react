import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <h1>Hello Router!</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="product" element={<Product/>}></Route>
          <Route path="pricing" element={<Pricing/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="app" element={<AppLayout/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
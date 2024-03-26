import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Shared/Layout";
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";
import LandingPage from "./Components/LandingPage";
import LandingPage1 from "./Components/LandingPage1";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="products" element={<Products />} /> */}
           {/* <Route index element={<LandingPage />} /> */}
          {/* <Route index element={<LandingPage1 />} /> */}
        </Route>
        <Route path="Login" element={<div>This is a login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;

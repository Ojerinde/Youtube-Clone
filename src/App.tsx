import { Route, Routes } from "react-router-dom";
import Counter from "./pages/counter";
import Home from "./pages/home";
// AIzaSyD_pzN3QgGrmzrZMs5moyNs0xD-2J02kgI
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

export default App;

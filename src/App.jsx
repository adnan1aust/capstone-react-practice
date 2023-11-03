import Home from "./routes/home/Home";
import Shop from "./routes/Shop/Shop";
import Authentication from "./routes/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

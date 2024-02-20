import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import PublicRouter from "./router/PublicRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

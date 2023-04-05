import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "@/components/navbar/navbar";
import RouterList from "./routers/router";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        {RouterList.map((route, key) => {
          return (
            <Route path={route.path} element={<route.component />} key={key} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

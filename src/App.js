import History from "./pages/History";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Routes>
          {/* <Route path='*' element={<ErrorNotFound/>} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

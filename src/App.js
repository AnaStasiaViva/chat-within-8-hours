import "./App.css";
import MainChatPage from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chat" element={<MainChatPage />} />
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
    </div>
  );
}

export default App;

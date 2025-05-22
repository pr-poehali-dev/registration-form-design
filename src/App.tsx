import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationForm />} />
      <Route path="/home" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

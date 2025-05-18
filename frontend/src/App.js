import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserLists from "./components/NoteLists";
import AddNotes from "./components/AddNotes";
import EditNotes from "./components/EditNotes";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="add" element={<AddNotes />} />
          <Route path="edit/:id" element={<EditNotes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserLists from "./components/NoteLists";
import AddNotes from "./components/AddNotes";
import EditNotes from "./components/EditNotes";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<UserLists/>}/>
      <Route path="add" element={<AddNotes/>}/>
      <Route path="edit/:id" element={<EditNotes/>}/>
     </Routes> 
    </BrowserRouter>
  );
}

export default App;

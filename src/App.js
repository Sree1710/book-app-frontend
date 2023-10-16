import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import ViewBook from './Components/ViewBook';
import SearchBook from './Components/SearchBook';
import DeleteBook from './Components/DeleteBook';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/addb" exact element={<AddBook/>} />
      <Route path="/viewb" exact element={<ViewBook/>} />
      <Route path="/searchb" exact element={<SearchBook/>} />
      <Route path="/deleteb" exact element={<DeleteBook/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

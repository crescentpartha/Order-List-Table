import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
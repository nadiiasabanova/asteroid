
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Header from "./layout/Header";
import {useState} from "react";
import css from './App.module.css';
import AsteroidContext from "./context/AsteroidContext";

function App() {
  const [cart, setCart] = useState([]);
  const [near, setNear] = useState ({});
  const [keys, setKeys] = useState([]);

  return (
    <div className={css.container}>
      <BrowserRouter>
        <Header/>
        <AsteroidContext.Provider value={{cart, setCart, near, setNear, keys, setKeys}}>
        <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart cart={cart}/>}/>
            <Route path='/detail/:id' element={<Detail near={near}  keys={keys}/>}/>

        </Routes>
      </AsteroidContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;

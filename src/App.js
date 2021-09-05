import { NavBar } from "./components/NavBar/NavBar";
import "./styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Carousel2 } from "./components/Carousel/Carousel"
import { CategoriesContainer } from "./components/CategoriesContainer/CategoriesContainer";
import { Footer } from "./components/Footer/footer";
import { CartContext } from "./components/Context/CartContext";
import { useState } from "react";
import { CartScreen } from "./components/CartScreen/CartScreen";

function App() {

  // Usamos un webhook de Estado y lo pasamos al Contexto para que todos los componentes puedan modificarlo.
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (prod) => {
    setCarrito([
      ...carrito,
      prod
    ])
  }

  const eliminarDelCarrito = (id) => {
    setCarrito( carrito.filter(prod => prod.id !== id) )
  }

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <>
    <CartContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, cantidadCarrito}}>
      <BrowserRouter>
        <NavBar/>
        <Carousel2/>
        <CategoriesContainer/>
        <Switch>
            
            <Route exact path='/'>
                <ItemListContainer/>
            </Route>

            <Route exact path="/detail/:itemId"> 
              <ItemDetailContainer/>
            </Route>

            <Route exact path='/category/:catId'>
                <ItemListContainer/>
            </Route>

            <Route exact path='/cart'>
                <CartScreen/>
            </Route>

            <Route path='*'>
                <Redirect to="/"/>
            </Route>

        </Switch>
        <Footer/>
      </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;

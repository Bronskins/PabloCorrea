import { NavBar } from "./components/NavBar/NavBar";
import "./styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Carousel2 } from "./components/Carousel/Carousel"
import { CategoriesContainer } from "./components/CategoriesContainer/CategoriesContainer";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <>
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

            <Route exact path='/nosotros'>
                <h1>Nosotros</h1>
            </Route>

            <Route exact path='/cart'>
                <h1>Carrito - Proximamente</h1>
            </Route>

            <Route path='*'>
                <Redirect to="/"/>
            </Route>

        </Switch>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;

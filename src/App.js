import { NavBar } from "./components/NavBar/NavBar";
import "./styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (

      <div>
        <NavBar/>
        <ItemListContainer greeting="Hola Coders!"/>
      </div>


  );
}

export default App;

import { Header } from "./Header/Navbar";
import ItemCount from "./Section/ItemCount";
import ItemListContainer from "./Section/ItemListContainer";

function App() {
  
  return (
    <div className="w-screen">
      <Header name={"Walisson"} />
      <ItemListContainer />
      <ItemCount />
  
    </div>
  );
}

export default App;

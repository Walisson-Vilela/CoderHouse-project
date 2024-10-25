import { Header } from "./Header/Navbar";
import ItemListContainer from "./Section/ItemListContainer";
import ProductDescription from "./Section/ProductDescription";

function App() {
  return (
    <div className="w-screen p-2">
      <Header name={"Walisson"} />
      <ProductDescription/>
      <ItemListContainer/>
    </div>
  );
}

export default App;

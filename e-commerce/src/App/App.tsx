import { Header } from "./Header/Navbar";
import ItemListContainer from "./Section/ItemListContainer";
import ProductDescription from "./Section/ProductDescription";
import PurchaseSummary from "./Section/PurchaseSummary";

function App() {
  return (
    <div className="w-screen p-2">
      <Header name={"Walisson"} />
      <ProductDescription />
      <ItemListContainer />
      <PurchaseSummary />
    </div>
  );
}

export default App;

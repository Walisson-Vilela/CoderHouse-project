import { Header } from "./Header/Navbar";
import ItemListContainer from "./Section/ItemListContainer";
import ProductDescription from "./Section/ProductDescription";
import PurchaseSummary from "./Section/PurchaseSummary";

function App() {
  return (
    <div className="w-screen p-2 ">
      <div class="grid grid-cols-3 gap-4">
        <Header name={"Walisson"} />
        <ProductDescription />
        <img src="#" />
        <div className="grid col-span-2 gap-4">
          <ItemListContainer />
          <PurchaseSummary />
        </div>
      </div>
    </div>
  );
}

export default App;

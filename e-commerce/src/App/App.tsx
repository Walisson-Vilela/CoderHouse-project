import { Header } from "./Header/Navbar";
import ItemListContainer from "./Section/ItemListContainer";
import ProductDescription from "./Section/ProductDescription";
import PurchaseSummary from "./Section/PurchaseSummary";

function App() {
  return (
    <div className="w-screen p-2 h-screen ">
      <div className="grid grid-cols-3 gap-4 ">
        <Header/>
        <ProductDescription />
        <img src="#" />
        <div className="grid col-span-2 gap-4 h-full">
          <ItemListContainer />
          <PurchaseSummary />
        </div>
      </div>
    </div>
  );
}

export default App;

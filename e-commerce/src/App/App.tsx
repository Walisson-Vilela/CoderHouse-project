import { Header } from "./Header/Navbar";
import ClickCount from "./Section/ClickCount";
import ItemListContainer from "./Section/ItemListContainer";

function App() {
  
  return (
    <div className="w-screen">
      <Header name={"Walisson"} />
      <ItemListContainer />
      {/* <ClickCount /> */}

    </div>
  );
}

export default App;

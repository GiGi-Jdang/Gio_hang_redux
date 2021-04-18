import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import MessengerContainer from "./containers/messengerContainer";
import CartContainer from "./containers/cartContainer";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App hidden-sn animated deep-purple-skin">
      <div>
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer></ProductsContainer>
            <MessengerContainer></MessengerContainer>
            <CartContainer></CartContainer>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

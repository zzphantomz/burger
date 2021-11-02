import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Switch, Route } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
function App() {
  return (
    <div>
      <Layout>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={BurgerBuilder} exact />
            <Route path="/orders" component={Orders} exact />
          </Switch>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

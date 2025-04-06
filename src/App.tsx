import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage } from "./screens/HomePage/HomePage";
import { ProductDetail } from "./screens/ProductDetail/ProductDetail";
import { Paytment } from "./screens/Payment/Payment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/modules/products/actions/fetchProducts";
import { AppDispatch } from "./app/store";
import { YourOrders } from "./screens/YourOrders/YourOrders";
import { fetchOrder } from "./redux/modules/orders/actions/fetchOrder";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrder());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/product-detail">
          <ProductDetail />
        </Route>

        <Route exact path="/payment">
          <Paytment />
        </Route>

        <Route exact path="/your-orders">
          <YourOrders />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

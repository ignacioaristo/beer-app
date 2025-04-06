import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage } from "./screens/HomePage/HomePage";
import { MainLayout } from "./screens/Layouts/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;

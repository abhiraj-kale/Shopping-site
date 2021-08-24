import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Cart from "./Components/Checkout/Cart";

function App() {
    let pageNotFound = () =>  (
            <h1> Sorry the Page you are looking for doesn't exist.</h1>
    )
    return (
        <Router>
            <Switch>
                <Route path={"/"} component={Home}/>
                <Route path={"/cart"} component={Cart}/>
                <Route path={"/product/:product_id"} component={Product} />
                <Route component={pageNotFound} />
            </Switch>
        </Router>
    )
}

export default App;

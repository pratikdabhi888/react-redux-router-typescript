import * as React from 'react';
import './App.css';
import ProductMenu from "./views/product/Crud/Product";
import CreateProduct from "./views/product/Crud/CreateProduct";
import Products from "./views/product/index"
import ViewProduct from "./views/product/Crud/ViewProduct";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Route exact path="/" component={ProductMenu}/>
                    <Route exact path="/create" component={CreateProduct}/>
                    <Route exact path="/list" component={Products}/>
                    <Route exact path="/view/:id" component={ViewProduct}/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

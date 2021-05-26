
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import List from './components/List.component';
import Details from "./components/Details.component";
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
        <Route exact path="/list" component={List} />
        <Route path="/details/:id" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;

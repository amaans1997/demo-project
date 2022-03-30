import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'; // antd css import
import Home from './screens/Home'
import CoverPage from './screens/CoverPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cover" component={CoverPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

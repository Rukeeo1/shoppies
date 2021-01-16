import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import { MoviesContextProvider } from 'context/';

function App() {
  return (
    <Router>
      <MoviesContextProvider>
        <Navbar />
        <div className="App">
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  path={route.url}
                  component={route.component}
                  key={index}
                  exact={route.exact}
                />
              );
            })}
          </Switch>
        </div>
      </MoviesContextProvider>
    </Router>
  );
}

export default App;

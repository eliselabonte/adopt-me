import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { StrictMode, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Details from './Details';
import ThemeContext from './ThemeContext';


const App = () => {
  const [theme] = useState('rgb(246, 192, 100)');

  return(
    <ThemeContext.Provider value={theme}>
      <div>
          <Router>
            <header>
              <Link to='/'>
                  <h1>Adopt Me!</h1>
              </Link>
            </header>
            <Switch>
              <Route path='/details/:id' >
                <Details />
              </Route>
              <Route path='/'>
                <SearchParams />
              </Route>
            </Switch>
          </Router>
        </div>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,

  document.getElementById("root"));


import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import HomePage from '../screen/homePage';
import ListPage from '../screen/listPage';
import DetailPage from '../screen/detailPage';

const CustomRouting = () =>{
    return <>
    <Router>
    {/* <div>
      <div>
        <Link to="/"> Home Page </Link>
        </div>

      <div>
        <Link to="/list">List Page</Link>
      </div>
      
      <div>
        <Link to="/detail">Detail Page</Link>
      </div>
    </div> */}

    <Switch>
      <Route path="/list">
        <ListPage/>
      </Route>
      <Route path="/detail">
        <DetailPage />
      </Route>
      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>


  </Router>
  </>
}

export default CustomRouting;
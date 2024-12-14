import './App.css';
import Search from './Search';
import ZomatoHeader from './ZomatoHeader';
import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   <Search/> 
    // </div>
    <>
    <BrowserRouter>
    <Header/>
   
    <Routes>
    <Route path='/Search' element={ <Search/> }/>
    <Route path='/ZomatoHeader' element={ <ZomatoHeader/> }/>

    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

import './App.css';
import Header from './Components/Header';
import CardExpanded from './Components/Card/CardExpanded';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CardletStackContainer from './Components/CardletStackContainer';

function App() {
  return (
    // <Provider store={store}>
    //       <div className="App">
    //   <div className="headerContainer">
    //     <Header />
    //   </div>
    //   <div className="cardletStackContainer">
    //     <CardletStack />
    //     <CardletStack />
    //     <CardletStack />
    //   </div>
    //   {/* <CardExpanded></CardExpanded> */}
    // </div>
    // </Provider>
    <Provider store={store}>
      <BrowserRouter>
      <div className='App'>
        <div className='headerContainer'>
          <Header></Header>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<CardletStackContainer></CardletStackContainer>}></Route>
            <Route path="/card/:id" element={<CardExpanded></CardExpanded>}></Route>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

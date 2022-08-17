import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import FirstPage from './firstPage';
import MainPage from './mainPage';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route index element = {
          <FirstPage/>}/>
        <Route path='toMainPage' element={
          <Provider store={store}>
            <MainPage/>
          </Provider>}/>
        <Route path='toFirstPage' element={<FirstPage/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
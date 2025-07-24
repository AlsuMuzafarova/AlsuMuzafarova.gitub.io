import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from "./main";
import Collections from "./Collections";
import NotFound from "./components/NotFound";
import './App.css';

function App() {
  return (
      <Router basename="/AlsuMuzafarova.gitub.io">
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Collections" element={<Collections/>}/>
              <Route path="/NotFound" element={<NotFound />} />
              {/*<Route path="*" element={<NotFoundPage />} /> /!* 404 страница *!/*/}
          </Routes>
      </Router>
  );
}

export default App;

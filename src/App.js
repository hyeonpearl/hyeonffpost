import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import NewsPage from './routers/NewsPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/hyeonffpost/all' element={<NewsPage />} />
        <Route path='/hyeonffpost/:category' element={<NewsPage />} />
      </Routes>
    </>
  );
};

export default App;

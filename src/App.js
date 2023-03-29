import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import NewsPage from './routers/NewsPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/pearlffpost/' element={<NewsPage />} />
        <Route path='/pearlffpost/:category' element={<NewsPage />} />
      </Routes>
    </>
  );
};

export default App;

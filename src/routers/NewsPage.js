import React from 'react';
import { useParams } from 'react-router-dom';

import Categories from '../components/Categories';
import Header from '../components/Header';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Header />
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;

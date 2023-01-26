import React, { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCatogory] = useState('all');
  const onSelect = useCallback(category => {
    setCatogory(category);
  }, []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;

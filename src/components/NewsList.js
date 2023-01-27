import axios from 'axios';
import styled from 'styled-components';
import usePromise from '../hooks/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 0 3rem 0;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const NewsList = ({ category }) => {
  const API_KEY = '6a3d765570ba4f66ba22b6a8763e640e';

  const [isLoading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
    );
  }, [category]);

  if (isLoading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles?.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

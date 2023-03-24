import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={c.name === 'all' ? '/hyeonffpost/' : `/hyeonffpost/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

const CategoriesBlock = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem 1rem 0 1rem;
  margin: 0 auto;
  justify-content: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    top: 3rem;
    overflow-x: auto;
    justify-content: left;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding: 0 0 0.25rem 0;

  &:hover {
    color: #89ddff;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #3bc9db;
    color: #3bc9db;

    &:hover {
      border-bottom: 2px solid #89ddff;
      color: #89ddff;
    }
  }
  & + & {
    margin: 0 0 0 1rem;
  }
`;

export default Categories;

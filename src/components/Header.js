import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <img
        src={`${process.env.PUBLIC_URL}/assets/pearlffpost.svg`}
        alt='pearlffpost'
      />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background: #222;
  color: #fff;

  img {
    width: 20rem;
    height: 4rem;
  }

  @media screen and (max-width: 768px) {
    height: 3rem;

    img {
      width: 10rem;
      height: 3rem;
    }
  }
`;

export default Header;

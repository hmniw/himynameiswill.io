import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: black;
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  z-index: 5;
  visibility: hidden;
  
  @media screen and (max-width: 768px) {
  visibility: visible;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;
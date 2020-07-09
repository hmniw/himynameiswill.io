import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 6.6px;
  left: 6.6px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  span {
    width: 2rem;
    height: 0.25rem;
    background: linear-gradient(to right, cyan, violet);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      width: 1rem;
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  
  @media screen and (max-width:768px) {
    display: flex;
  }
`;
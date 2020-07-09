import React from 'react'
import { StyledBurger } from './burger.styled'

const Burger = ({open, setOpen}) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <span/>
            <span/>
            <span/>
        </StyledBurger>
    )
};

export default Burger;
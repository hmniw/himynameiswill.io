import React from 'react'
import HeaderLink from '../HeaderLink/header-link'
import { StyledMenu } from "./overlay-menu.styled";

const Menu = ({open, setOpen}) => {
    return (
        <StyledMenu open={open}>
                <HeaderLink to={'/'} text={'home'} open={open} setOpen={setOpen}/>
                <HeaderLink to={'/blog'} text={'blog'} open={open} setOpen={setOpen}/>
                <HeaderLink to={'/portfolio'} text={'portfolio'} open={open} setOpen={setOpen}/>
                <HeaderLink to={'/about'} text={'about'} open={open} setOpen={setOpen}/>
        </StyledMenu>
    )
};

export default Menu;

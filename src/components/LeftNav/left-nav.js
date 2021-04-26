 import React, { useState } from 'react'
 import { leftNavContainer, headerContainer, burgerMenuContainer} from './left-nav.module.scss'
 import { Burger, Menu, HeaderLink } from '../../components'

 function App() {
     const [open, setOpen] = useState(false);
     return (
         <header>
             <div className={leftNavContainer}>
                 <div className={headerContainer}>
                     <HeaderLink to={'/'} text={'home'} open={open} setOpen={setOpen}/>
                     <HeaderLink to={'/blog'} text={'blog'} open={open} setOpen={setOpen}/>
                     <HeaderLink to={'/about'} text={'about'} open={open} setOpen={setOpen}/>
                 </div>
             </div>
             <div className={burgerMenuContainer}>
                 <Burger open={open} setOpen={setOpen}/>
                 <Menu open={open} setOpen={setOpen}/>
             </div>
         </header>
     )
 }
export default App;
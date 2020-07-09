 import React, { useState } from 'react'
 import styles from './left-nav.module.scss'
 import { Burger, Menu, HeaderLink } from '../../components'

 function App() {
     const [open, setOpen] = useState(false);
     return (
         <header>
             <div className={styles.leftNavContainer}>
                 <div className={styles.headerContainer}>
                     <HeaderLink to={'/'} text={'home'}/>
                     <HeaderLink to={'/blog'} text={'blog'}/>
                     <HeaderLink to={'/about'} text={'about'}/>
                 </div>
             </div>
             <div className={styles.burgerMenuContainer}>
                 <Burger open={open} setOpen={setOpen}/>
                 <Menu open={open} setOpen={setOpen}/>
             </div>
         </header>
     )
 }
export default App;
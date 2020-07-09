 import React from 'react'
 import { Link, StaticQuery, graphql } from 'gatsby'
 import styles from './header.module.scss'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
 import avatarDark from '../../images/avatars/avatar-dark-40.png'
 import VisibilitySensor from "react-visibility-sensor";

 const HeaderLink = props => (
 <Link className={styles.link} to={props.to}>{props.text}</Link>
);

 function onChange (isVisible) {
     console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
 }

export const visibilitySensorChange = val => {
     if (val) {
         this.setState({ fixed: false });
     } else {
         this.setState({ fixed: true });
     }
 };

const SocialButton = (props) => {
    let style = '';
    let url = '';

    if (props.site === 'twitter') {
        style = faTwitter;
        url = "https://twitter.com/WillTestsThings";
    }
    else if (props.site === 'linkedin') {
        style = faLinkedinIn;
        url = "https://www.linkedin.com/in/will-herring/";
    }
    else if (props.site === 'github') {
        style = faGithub;
        url = "https://github.com/hmniw";
    }

    return (
        <a href={url} target={"_blank"} rel={"noopener noreferrer"} className={styles.buttonContainer}>
            <FontAwesomeIcon icon={style} size={"lg"} className={styles.buttonIcon}/>
        </a>
    )
};

 export default () => (
     <header>
         {/*<div className={styles.logo}>*/}
         {/*    <img src={avatarDark} alt={""} className={styles.avatar}/>*/}
         {/*    <div className={styles.name}>Hi my name is Will</div>*/}
         {/*</div>*/}
         <div className={styles.container}>
             <HeaderLink to={'/'} text={'home'}/>
             <HeaderLink to={'/'} text={'articles'}/>
             <HeaderLink to={'/about'} text={'about'}/>
             <SocialButton site={"github"}/>
             <SocialButton site={"linkedin"}/>
             <SocialButton site={"twitter"}/>
         </div>
     </header>
)


 // const HomeButton = props => (
 //     <Link to={props.to}>
 //         <div className={styles.button}>{props.text}</div>
 //     </Link>
 // );

import React from "react"
import Layout from '../components/Layout/layout'
import styles from './index.module.scss'
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default () => (
  <Layout>
      <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1 className={styles.fancy}>Hi, I'm Will.</h1>
          </div>
          <div className={styles.socialIconContainer}>
              <SocialButton site={"github"}/>
              <SocialButton site={"linkedin"}/>
              <SocialButton site={"twitter"}/>
          </div>
      </div>
  </Layout>
)

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
            <FontAwesomeIcon icon={style} size={"lg"} className={styles.socialIcon}/>
        </a>
    )
};

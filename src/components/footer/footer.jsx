import React from 'react'
import logo from '../../assets/logo.png'
import facebookIcon from '../../assets/facebook-w.svg'
import instagramIcon from '../../assets/instagram-w.svg'
import twitterIcon from '../../assets/twitter-w.svg'
import linkedIcon from '../../assets/linkedin-w.svg'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}><img src={logo} alt="" /></div>
        <div className={styles.mid}>
          <div className={styles.qLink}>
            <h3>Company</h3>
            <ul>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Store</a></li>
              <li><a href='/'>Blog</a></li>
            </ul>
          </div>
          <div className={styles.qLink}>
            <h3>Legal</h3>
            <ul>
              <li><a href='/'>Term and Conditions</a></li>
              <li><a href='/'>Privacy Policy</a></li>
              <li><a href='/'>Shipping Policy</a></li>
              <li><a href='/'>Returns &amp; Refunds</a></li>
              <li><a href='/'>Cookies</a></li>
            </ul>
          </div>
          <div className={styles.qLink}>
            <h3>Need Help?</h3>
            <ul>
              <li><a href='/'>Track Order</a></li>
              <li><a href='/'>FAQ&apos;s</a></li>
              <li><a href='/'>Blog</a></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <a href='mailto:support@rareeatfresh.com'>support@rareeatfresh.com</a><br />
            <a href='tel:02072054031'>020 7205 4031</a>
            <p>International House, 64 Nile Street, London, N1 7SR, United Kingdom</p>
            <div className={styles.social}>
              <a href='https://facebook.com' target='_blank' rel="noreferrer"><img src={facebookIcon} alt="" /></a>
                <a href='https://instagram.com' target='_blank' rel="noreferrer"><img src={instagramIcon} alt="" /></a>
                <a href='https://x.com' target='_blank' rel="noreferrer"><img src={twitterIcon} alt="" /></a>
                <a href='https://linkedin.com' target='_blank' rel="noreferrer"><img src={linkedIcon} alt="" /></a>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          <p>Copyright &copy; 2023 Rare Eat Fresh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
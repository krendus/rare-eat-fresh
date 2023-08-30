import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'
import linkedIcon from '../assets/linkedin.svg'
import logo from '../assets/logo.png'
import styles from '../styles/contact.module.css'
import bg from '../assets/bg.jpg'

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <div className={styles.container}>
        <div  style={{ backgroundImage: `url(${bg})` }} className={styles.contact}>
          <div className={styles.left}>
            <div className={styles.contactCard}>
              <div><img src={logo} alt="" /></div>
              <p>RARE EAT FRESH represents a range of unique ingredients and the vibrancy of different Cultures, every product in the Rare Eat range has a story inspired by different Cultures</p>
              <a href='tel:02072054031'>020 7205 4031</a>
              <a href='mailto:support@rareeatfresh.com'>support@rareeatfresh.com</a><br />
              <div className={styles.social}>
                <a href='https://facebook.com' target='_blank' rel="noreferrer"><img src={facebookIcon} alt="" /></a>
                <a href='https://instagram.com' target='_blank' rel="noreferrer"><img src={instagramIcon} alt="" /></a>
                <a href='https://x.com' target='_blank' rel="noreferrer"><img src={twitterIcon} alt="" /></a>
                <a href='https://linkedin.com' target='_blank' rel="noreferrer"><img src={linkedIcon} alt="" /></a>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <form>
              <h1>Get in touch</h1>
              <p>Your Questions and Feedback Matter to Us - Reach Out, Let's Connect, and Explore Together to Ensure Your Rare Eat Fresh Experience Is Exceptional and Delightful.</p>
              <div className={styles.formWrapper}>
                <div className={styles.rowInput}>
                  <input type="text" placeholder='First Name'/>
                  <input type="text" placeholder='Last Name'/>
                </div>
                <input type='email' placeholder='Email Address'/>
                <textarea placeholder='Describe your issues'></textarea>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.banner}>
          <h1>Join Our Newsletter: Stay Connected, Savor Exclusives!</h1>
          <p>Subscribe to our newsletter and be a part of the vibrant Rare Eat Fresh community. Stay connected with the latest updates, exclusive offers, and exciting promotions on rare West African food ingredients.</p>
          <div>
            <input type='email' placeholder='Email Address'/>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
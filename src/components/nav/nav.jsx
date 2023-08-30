import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.svg'
import userIcon from '../../assets/user.svg'
import arrowDownIcon from '../../assets/arrow-down.svg'
import langIcon from '../../assets/lang.svg'
import cartIcon from '../../assets/cart.svg'
import menuIcon from '../../assets/menu.svg'
import closeIcon from '../../assets/close-icon.svg'
import styles from './nav.module.css'

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userCard, setUserCard] = useState(false);
  const handleShowdropdown = () => {
    setUserCard(false);
    setShowDropdown(!showDropdown);
  }
  const handleShowUserCard = () => {
    setUserCard(!userCard);
    setShowDropdown(false);
  }
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.qLinks}>
          <a href='/'>Store</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Blog</a>
        </div>
        <div className={styles.search}>
          <button><img src={searchIcon} alt="" /></button>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.right}>
          <button className={styles.btn}><img src={langIcon} alt="" /></button>
          <button className={styles.btn}><img src={cartIcon} alt="" /></button>
          <button className={styles.userBtn} onClick={handleShowUserCard}>
            <img src={userIcon} alt="" />
            <img src={arrowDownIcon} alt="" />
          </button>
          <button className={styles.nBtn} onClick={handleShowdropdown}>{ showDropdown ? <img src={closeIcon} alt="" /> : <img src={menuIcon} alt="" /> }</button>
        </div>
      </div>
      {
        showDropdown ? (
          <div className={styles.dropdown}>
             <div className={styles.dLinks}>
                <a href='/'>Store</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Blog</a>
              </div>
              <div className={styles.searchD}>
                <button><img src={searchIcon} alt="" /></button>
                <input type="text" placeholder="Search" />
              </div>
          </div>
        ): null
      }
      {
        userCard ? (
          <div className={styles.userCard}>
             <div className={styles.gLinks}>
                <a href='/'>Sign In</a>
                <a href='/'>Register</a>
              </div>
          </div>
        ): null
      }
    </nav>
  )
}

export default Nav
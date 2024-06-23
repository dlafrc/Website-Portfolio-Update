import React from 'react'
import {BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/della-rachmatika/" target='_blank' rel="noreferrer"><BsLinkedin></BsLinkedin></a> 
        <a href="https://www.instagram.com/dlafrc/" target='_blank' rel="noreferrer"><BsInstagram></BsInstagram></a> 
        <a href="https://www.youtube.com/channel/UCq6Ss62XQXte_WWEmcDsCAA" target='_blank' rel="noreferrer"><BsYoutube></BsYoutube></a> 
        <a href="https://github.com/dlafrc" target='_blank' rel="noreferrer"><FaGithub></FaGithub></a> 
    </div>
  )
}

export default HeaderSocials
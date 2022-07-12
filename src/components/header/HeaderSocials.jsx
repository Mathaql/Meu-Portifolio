import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/matheus-alquino-5a5631200/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mathaql" target="_blank"><BsGithub/></a>
        <a href="mailto:mhalquino@gmail.com" target="_blank"><GrMail/></a>
    </div>
  )
}

export default HeaderSocial
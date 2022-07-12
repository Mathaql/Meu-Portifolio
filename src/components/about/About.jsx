import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Venha me conhecer</h5>
      <h2>Quem sou eu ?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre Mim Imagem" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>+1 Ano Atuando</small>
            </article>

            <article className='about__card'>
              <AiOutlineCode className='about__icon' />
              <h5>Serviços</h5>
              <small>+25 Trabalhos Realizados</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>+20 Projetos Completados</small>
            </article>
          </div>

          <p>
            Comecei a programar para passar o tempo enquanto cursava o Ensino Médio e posso dizer que foi o verdadeiro amor à primeira vista.
          </p>
          <p>
            Atuei de forma autônoma desenvolvendo landing pages e aplicações web para freelas até decidir me aprofundar mais em programação e levar como a profissão da minha vida. Para isso decidi me aventurar no backend, escolhendo a tecnologia Java e alguns de seus frameworks.
          </p>
          <p>
            Hoje sigo focado em aprender cada vez mais sobre Java e suas utilidades, podendo assim me especializar.
          </p>

          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default About
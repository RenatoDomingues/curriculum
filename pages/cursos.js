
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../components/PageTitle'

const Cursos = () => {
    return (
        <div className={styles.wrapper}>
        <PageTitle title='Cursos'/>
          <div className={styles.cursosDiv}>
            <Link href='/'>
            <button className={styles.cursosButton}><a>Home</a></button>
            </Link>
            <div className={styles.cursosFlex}>
              <div className={styles.cursosFlex1}>  
                <Link href='/reconhe'>
                  <button className={styles.cursosButton}><a>Reconhecimento</a></button>
                </Link>
                <Link href='/educacao'>
                  <button className={styles.cursosButton}><a>Educação</a></button>
                </Link>
              </div>
              <div className={styles.cursosFlex1}>
                <Link href='/idiomas'>
                  <button className={styles.cursosButton}><a>Línguas</a></button>
                </Link>
                <Link href='/experiencia'>
                  <button className={styles.cursosButton}><a>Experiência</a></button>
                </Link>
              </div>
            </div>            
          </div>
          <div className={styles.cursosDiv}>
              <h2 className={styles.cursosH2}>Curso FullStack Master</h2>
              <div className={styles.cursosFlex}>
                  <div className={styles.cursosFlex2}>
                    <img src='../../logoFullStackaAcademy.png' width='20%'/>
                  </div>
                  <div className={styles.cursosFlex2}>
                    <p><a href='https://www.facebook.com/groups/516548602154162' target='_blank'><img src='logo_facebook.png' width='10%' alt='Icone do Facebook'/></a>
                    </p>

                    <p><a href='https://devpleno.com' target='_blank'><img src='www.png' width='10%' alt='Icone do site'/></a>
                    </p>
                  </div>
                  <div className={styles.cursosFlex2}>
                    <img src='../../logoDevPleno.png' width='15%'/>
                  </div>
              </div>
          </div>
          <div className={styles.cursosDiv}>
            <div className={styles.cursosFlex}>
              <div className={styles.cursosFlex1}>
                <h3>Ano</h3>
                <h4 className={styles.cursosH4}>2020</h4>
              </div>
              <div className={styles.cursosFlex1}>
                <h3>Termino</h3>
                <h4 className={styles.cursosH4}>2021</h4>
              </div>
              <div className={styles.cursosFlex1}>
                <h3>Tecnologias</h3>
                <h4 className={styles.cursosH4}> JavaScript, NodeJS, React, express, html, css, FireBase, Tailwindcss, next, XAMPP, HeidiSQL, npm, vercel e MySQL </h4>
              </div>
            </div>
          </div>
          
          <div className={styles.cursosDiv}>
              <h2 className={styles.cursosH2}>Curso RocketSeat</h2>
              <div className={styles.cursosFlex}>
                  <div className={styles.cursosFlex2}>
                    <img src='../../logoRocketSeat1.png' width='20%'/>
                  </div>
                  <div className={styles.cursosFlex2}>
                    <p><a href='https://www.facebook.com/rocketseat' target='_blank'><img src='logo_facebook.png' width='10%' alt='Icone do Facebook'/></a>
                    </p>
                    <p>
                    <a href='https://rocketseat.com.br/' target='_blank'><img src='www.png' width='10%' alt='Icone do site'/></a>
                    </p>
                  </div>
                  <div className={styles.cursosFlex2}>
                    <img src='../../logoRocketSeat2.png' width='15%'/>
                  </div>
              </div>
          </div>
          <div className={styles.cursosDiv}>
            <div className={styles.cursosFlex}>
              <div className={styles.cursosFlex1}>
                <h3>Ano</h3>
                <h4 className={styles.cursosH4}>2020</h4>
              </div>
              <div className={styles.cursosFlex1}>
                <h3>Termino</h3>
                <h4 className={styles.cursosH4}>2021</h4>
              </div>
              <div className={styles.cursosFlex1}>
                <h3>Tecnologias</h3>
                <h4 className={styles.cursosH4}> NodeJS, JavaScript, React, MySQL, Tailwindcss e next </h4>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Cursos
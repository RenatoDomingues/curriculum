
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../components/PageTitle'

const Index = () => {
    return (
        <div className={styles.wrapper}>
          <PageTitle title='Seja-bem-vindo-ao-meu-portfólio'/>

          <div className={styles.div}>
             <div>
                <h3 className={styles.logosH3}>Tecnologias, Frameworks e linguagem</h3>
             </div>
              <div className={styles.logosFlex}>
                <div className={styles.logosFlex1}>
                  <img src='../../logoNodeJS.png' alt='logo NodeJS' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoJavaScript.png' alt='logo JavaScript' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoReactNative.jpg' alt='logo ReactNative' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoFireBase.png' alt='logo FireBase' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoHTML.png' alt='logo HTML' width='30%'/>
                </div>
              </div>

              <div className={styles.logosFlex}>
                <div className={styles.logosFlex1}>
                  <img src='../../logoMySQL.png' alt='logo MySQL' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoTailwindcss.png' alt='logo Tailwindcss' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoCSS.png' alt='logo CSS' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoNext.jpg' alt='logo Next' width='30%'/>
                </div>
                <div className={styles.logosFlex1}>
                  <img src='../../logoExpress.jpg' alt='logo Express' width='30%'/>
                </div>
              </div>
          </div>

          <div className={styles.div}>
            <Link href='/educacao'>
              <h2 className={styles.h2}>Educação</h2>
            </Link>
              <p className={styles.p}>Integração, Patriarca e Universidade Anhanguera</p>
          </div>
      
          <div className={styles.div}>
            <Link href='/cursos'>
              <h2 className={styles.h2}>Cursos</h2>
            </Link>
              <h3 className={styles.colorPurple}>FullStack Master</h3>
              <p className={styles.p}> JavaScript, NodeJS, React, express, html, css, FireBase, Tailwuindcss, next, npm e  MySQL </p>
          </div>

          <div className={styles.div}>
            <Link href='/reconhe'>
              <h2 className={styles.h2}>Reconhecimentos</h2>
            </Link>
              <p className={styles.p}>Atacado obtive 04 certificados por mérito de ser um entre dos 100 melhores vendedores(a) que atingiram meta anual e junto cobria férias dos subgerente.</p>
          </div>

          <div className={styles.div}>
            <Link href='/idiomas'>
              <h2 className={styles.h2}>línguas</h2>
            </Link>
            <div className={styles.idiomaFlex}>
              <div className={styles.idiomaFlex1}>
                <h3 className={styles.colorPurple}>Espanhol</h3>
                <p className={styles.p}>moderado</p>
              </div>
              <div className={styles.idiomaFlex1}>
                 <h3 className={styles.colorPurple}>Inglês</h3>
                 <p className={styles.p}>Basico, pois cursando</p>
              </div>
            </div>
          </div>
      
          <div className={styles.div}>
            <Link href='/experiencia'>
              <h2 className={styles.h2}>Experiência profissional</h2>
            </Link>
            <div className={styles.experiencia}>
              <div className={styles.experiencia1}>
                <h3 className={styles.colorPurple}>Motorista</h3>
                <p className={styles.p}>Empresa multinacional</p>
              </div>
              <div className={styles.experiencia1}>
                <h3 className={styles.colorPurple}>Vigilante</h3>
                <p className={styles.p}>Empresa medio porte</p>
              </div>
              <div className={styles.experiencia1}>
                <h3 className={styles.colorPurple}>Vendedor e subgerente</h3>
                <p className={styles.p}>Empresa grande porte</p>
              </div>
              <div className={styles.experiencia1}>
                <h3 className={styles.colorPurple}>Operador e empilhadeira</h3>
                <p className={styles.p}>Empresa multinacional</p>
              </div>
            </div>
          </div>

        </div>
    )
}

export default Index
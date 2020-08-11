
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../components/PageTitle'

const Idiomas = () => {
    return (
        <div className={styles.wrapper}>
        <PageTitle title='Idiomas'/>
          <div className={styles.idiomasDivButton}>
            <Link href='/'>
              <button className={styles.idiomasButton}><a>Home</a></button>
            </Link>
          </div>
          <div className={styles.idiomasDiv}>
            <div className={styles.idiomasFlex}>
              <div className={styles.idiomasFlex1}>
                <h3>Espanhol</h3>
              </div>
              <div className={styles.idiomasFlex1}>
                <h4 className={styles.idiomasH4}>Nível básico a intermediário</h4>
              </div>
              <div className={styles.idiomasFlex1}>
                <h3>Esperiência</h3>
                <p className={styles.idiomasP}>Um ano vivendo em Asuncion, Paraguay.</p>
              </div>
            </div>
            <div className={styles.idiomasFlex}>
              <div className={styles.idiomasFlex1}>
                <h3>Inglês</h3>
              </div>
              <div className={styles.idiomasFlex1}>
                <h4 className={styles.idiomasH4}>Nível básico, cursando</h4>
              </div>
              <div className={styles.idiomasFlex1}>
                <div className={styles.idiomasCerfificado}>
                   <img src='../../certificadoIngles.jpg' width='50%'/>
                   <img src='../../certificadoIng.jpg' width='50%'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Idiomas
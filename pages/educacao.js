
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../components/PageTitle'

const Educacao = () => {
    return (
        <div className={styles.wrapper}>
        <PageTitle title='Educação'/>
          <div className={styles.educacaoDiv}>
            <Link href='/'>
              <button className={styles.educacaoButton}><a>Home</a></button>
            </Link>
          </div>
          <div className={styles.educacaoDiv}>
            <div>
              <h2 className={styles.educacaoH2}>Educação</h2>
            </div>
            <div className={styles.educacaoFlex}>
              <div className={styles.educacaoFlex1}>
              <h3>Ano</h3>
              <h4 className={styles.educacaoH4}>1994</h4>
              <h4 className={styles.educacaoH4}>1999</h4>
              <h4 className={styles.educacaoH4}>2020</h4>
              </div>
              <div className={styles.educacaoFlex1}>
              <h3>Escola</h3>
              <h4 className={styles.educacaoH4}>E.M. Integração</h4>
              <h4 className={styles.educacaoH4}>E.E. Patriarca da Independência</h4>
              <h4 className={styles.educacaoH4}>Universidade Anhanguera</h4>
              </div>
              <div className={styles.educacaoFlex1}>
              <h3>Curso</h3>
              <h4 className={styles.educacaoH4}>Fundamental</h4>
              <h4 className={styles.educacaoH4}>Ensino Médio</h4>
              <h4 className={styles.educacaoH4}>Análise e Desenvolvimento de Sistemas</h4>
              </div>
              <div className={styles.educacaoFlex1}>
              <h3>Termino</h3>
              <h4 className={styles.educacaoH4}>1999</h4>
              <h4 className={styles.educacaoH4}>2002</h4>
              <h4 className={styles.educacaoH4}>2023</h4>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Educacao
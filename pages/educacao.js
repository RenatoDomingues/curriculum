
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
            <div className={styles.educacaoFlex}>
              <div className={styles.educacaoFlex1}>  
                <Link href='/cursos'>
                  <button className={styles.educacaoButton}><a>Cursos</a></button>
                </Link>
                <Link href='/reconhe'>
                  <button className={styles.educacaoButton}><a>Reconhecimento</a></button>
                </Link>
              </div>
              <div className={styles.educacaoFlex1}>
                <Link href='/idiomas'>
                  <button className={styles.educacaoButton}><a>Línguas</a></button>
                </Link>
                <Link href='/experiencia'>
                  <button className={styles.educacaoButton}><a>Experiência</a></button>
                </Link>
              </div>
            </div>
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

              <div className={styles.educacaoDivLojas}>
                <div className={styles.educacaoFlex}>
                  <div className={styles.educacaoFlex1}>
                     <img src='../../logoUniversidadeAnhanguera.jpg' alt='logo universidade' width='50%' height='50%'/>
                  </div>
                  <div className={styles.reconheFlex1}>
                  <p><a href='https://www.vestibulares.com.br/anhanguera/?msclkid=562e2479263d1277ee427b4bd918713e&utm_source=bing&utm_medium=cpc&utm_campaign=AEDU%20Presencial%20%3A%3A%20L1%20%3A%3A%20Search%20%3A%3A%20Institucional&utm_term=%2Bsite%20%2Banhanguera&utm_content=Anhanguera%20(novo)' target='_blank'><img src='www.png' width='10%' alt='Icone do site'/></a>
                    </p>
                  </div>

                  <div className={styles.reconheFlex1}>
                    <p><a href='https://www.facebook.com/AnhangueraEdu/photos/a.357083814329730/2684440794927342' target='_blank'><img src='logo_facebook2.png' width='10%' alt='Icone do Facebook'/></a>
                    </p>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Educacao

import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../components/PageTitle'

const Reconhe = () => {
    return (
      <div className={styles.wrapper}>
          <PageTitle title='Reconhecimento'/>
          <div className={styles.reconheDiv}>
            <Link href='/'>
              <button className={styles.reconheButton}><a>Home</a></button>
            </Link>
            <div className={styles.reconheFlex}>
              <div className={styles.reconheFlex1}>  
                <Link href='/cursos'>
                  <button className={styles.reconheButton}><a>Cursos</a></button>
                </Link>
                <Link href='/educacao'>
                  <button className={styles.reconheButton}><a>Educação</a></button>
                </Link>
              </div>
                <div className={styles.reconheFlex1}>
                  <Link href='/idiomas'>
                    <button className={styles.reconheButton}><a>Línguas</a></button>
                  </Link>
                  <Link href='/experiencia'>
                    <button className={styles.reconheButton}><a>Experiência</a></button>
                  </Link>
                </div>
            </div>            
          </div>
          <div>
            <div className={styles.reconheDiv}>
                  <h3 className={styles.reconheH2}>Reconhecimento</h3>
                  <p className={styles.reconheP}>De 2004 a 2010, época em que trabalhei no Atacado Lojas Cem S/A, obtive <strong className={styles.reconheStrongP}>04
                  certificados por mérito</strong> de ser um entre dos <strong className={styles.reconheStrongP}>100 melhores vendedores(a)</strong> que
                  atingiram a meta anual, sendo que na época constavam de 126 filiais da
                  empresa em todo território Brasil.
                  Além disso, <strong className={styles.reconheStrongP}>cobria férias dos subgerentes e gerentes</strong> nas filiais de Vinhedo e
                  Valinhos com aproximadamente <strong className={styles.reconheStrongP}>uma equipe entre 10 a 20 colaboradores.</strong></p>
            </div>
          </div>
          <div className={styles.reconheDiv}>
            <div className={styles.reconheDivLojas}>
              <div className={styles.reconheFlex}>
                <div className={styles.reconheFlex1}>
                  <img src='../../logoLojasCem.png' width='50%'/>
                </div>
                <div className={styles.reconheFlex1}>
                    <p><a href='https://www.lojascem.com.br/site/' target='_blank'><img src='www.png' width='08%' alt='Icone do Site'/></a>
                    </p>
                </div>
                <div className={styles.reconheFlex1}>
                      <p><a href='https://www.facebook.com/lojascem' target='_blank'><img src='logo_facebook.png' width='08%' alt='Icone do Facebook'/></a>
                    </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Reconhe
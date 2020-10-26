
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../components/PageTitle'

const Experiencias = () => {
    return (
      <div className={styles.wrapper}>
        <PageTitle title='Expêriencias'/>
          <div className={styles.experienciasDiv}>
            <Link href='/'>
              <button className={styles.experienciasButton}><a>Home</a></button>
            </Link>
            <div className={styles.experienciasFlex}>
                <div className={styles.experienciasFlex1}>  
                  <Link href='/cursos'>
                    <button className={styles.experienciasButton}><a>Cursos</a></button>
                  </Link>
                  <Link href='/educacao'>
                    <button className={styles.experienciasButton}><a>Educação</a></button>
                  </Link>
                </div>
                <div className={styles.experienciasFlex1}>
                  <Link href='/reconhe'>
                    <button className={styles.experienciasButton}><a>Reconhecimento</a></button>
                  </Link>
                  <Link href='/idiomas'>
                    <button className={styles.experienciasButton}><a>Línguas</a></button>
                  </Link>
              </div>
            </div>            
          </div>

          <div className={styles.experienciasDiv}>
            <h2 className={styles.experienciasH2}>Experiências</h2>
            <div className={styles.experienciasFlex}>
              <div className={styles.experienciaSflex1}>
                 <h4 className={styles.experienciasH4}>01/2018 a atual</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Motorista</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Uber Technologies Inc.</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Carteira de habilitação categoria AD.</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <p className={styles.experienciasP}>Realizava viagens longas como exemplos São Paulo e Santos, pois também viagens curtas centro e região de Campinas.</p>
              </div>          
            </div>

            <div className={styles.experienciasFlex}>
              <div className={styles.experienciaSflex1}>
                 <h4 className={styles.experienciasH4}>05/2010 a 03/2018</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Vigilante</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Treze Listas LTDA</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Entre 07/2015 a 10/2018 trabalhei em ambas empresa, outra Hagana segurança LTDA.</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <p className={styles.experienciasP}>Realizava rondas motorizadas, portaria e monitoramento.</p>
              </div>          
            </div>

            <div className={styles.experienciasFlex}>
              <div className={styles.experienciaSflex1}>
                 <h4 className={styles.experienciasH4}>07/2004 a 05/2010 </h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Vendedor</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Lojas Cem S/A</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Cobria férias dos subgerentes e gerentes.</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <p className={styles.experienciasP}>04 certificados entre 100 melhores vendedores.</p>
              </div>          
            </div>

            <div className={styles.experienciasFlex}>
              <div className={styles.experienciaSflex1}>
                 <h4 className={styles.experienciasH4}>04/2001 a 11/2002 </h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Operador</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Cablena do Brasil LTDA</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <h4 className={styles.experienciasH4}>Operador de produção.</h4>
              </div>
              <div className={styles.experienciaSflex1}>
                <p className={styles.experienciasP}>Realizava serviço de operador de empilhadeira no almoxarifado.</p>
              </div>          
            </div>
          </div>
      </div>
    )
}

export default Experiencias
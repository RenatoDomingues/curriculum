
import React from 'react'
import styles from '../../pages/styles.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
              <div className={styles.wrapper}>
                  <div className={styles.headerSize}>
                    <div className={styles.headerSize2}>
                      <img className={styles.headerSize3} src='../../photoBackground.jpg' width='90%' height='50%'/>
                    </div>
                    <div className={styles.headerSize2}>
                      <img className={styles.headerSize3} src='../../fotoCurri.jpg' alt='foto' width='90%' height='50%'/>
                    </div>
                    <div className={styles.headerSize2}>
                      <img className={styles.headerSize3} src='../../photoBackgroundDev.jpg' width='90%' height='50%'/>
                    </div>
                  </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>
                  <p className={styles.headerP}>Sou casado, tenho 38 anos, 02 filhas, já trabalhei na área como vendedor,
                subgerente, motorista de aplicativo, operador de empilhadeira e vigilante.
                Atualmente busco numa empresa uma oportunidade que eu possa
                desenvolver profissionalmente, demonstrar minhas competências e habilidades,
                colaborando assim para o crescimento da mesma.</p>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>
                  <h1 className={styles.headerH1}>Contate-me</h1>
                     <p className={styles.headerP1}><a href='https://www.facebook.com/profile.php?id=100013733978537' target='_blank'>Facebook</a> - <a href='https://github.com/RenatoDomingues' target='_blank'>GitHub</a> - <a href='linkedin.com/in/renato-domingues-silva-094b971b0/' target='_blank'>LinkedIn</a> - Ou pelo email kungfurenato30@gmail.com</p>
                </div>
              </div>
        </React.Fragment>
    )
}

export default Header
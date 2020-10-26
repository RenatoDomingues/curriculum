
import React from 'react'
import styles from '../../pages/styles.module.css'

const Header = () => {
    return (
        <React.Fragment>
              <div className={styles.wrapper}>
                  <div className={styles.headerSize}>
                    <div className={styles.headerSize2}>
                      <img className={styles.headerSize3} src='../../codigo.png'/>
                    </div>
                    <div className={styles.headerSize2}>
                      <img className={styles.headerSize3} src='fotoCurri2.jpg'/>
                    </div>
                    <div className={styles.headerSize2}>
                      <img className={styles.headerSize3} src='../../codigo2.png'/>
                    </div>
                  </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>
                  <p className={styles.headerP}>Sou casado, tenho 38 anos, 02 filhas, já trabalhei na área como vendedor, subgerente, motorista de aplicativo, operador de empilhadeira e vigilante.Atualmente busco numa empresa uma oportunidade que eu possa desenvolver profissionalmente, demonstrar minhas competências e habilidades, colaborando assim para o crescimento da mesma.
                  </p>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.pContateMe}>
                  <h1>Contate-me</h1> 
                  <div className={styles.pW1}>
                    <div className={styles.pW}>                 
                      <a href='https://www.linkedin.com/in/renato-domingues-silva-094b971b0/' target='_blank'><img src='logo_linkedin.png' width='10%' alt='icone do LinkedIng'/></a>
                    </div>
                    <div className={styles.pW}>
                      <a href='https://github.com/RenatoDomingues' target='_blank'><img src='logo_github.png' width='10%' alt='Icone do GitHub'/></a>
                    </div>
                  </div>
                  <p className={styles.headerEmail}>
                    Ou pelo email kungfurenato30@gmail.com
                  </p>
                </div>
              </div>
        </React.Fragment>
    )
}

export default Header
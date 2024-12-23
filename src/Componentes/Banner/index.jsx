import styles from './Banner.module.css'
import circuloColorido from '//assets/circulo_colorido.png'
import minhaFoto from '//assets/minha_foto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Sou formando em engenharia de software e atualmente estou
                    participando do projeto Oracle ONE na Alura.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img  
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto de Raniel Sorrindo'
                />
            </div>
        </div>
    )
}
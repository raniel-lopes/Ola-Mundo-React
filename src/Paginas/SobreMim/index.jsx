import styles from "./SobreMim.module.css";
import PostModelo from "Componentes/PostModelo";
import fotoCapa from '@assets/sobre_mim_capa.png';
import fotoSobreMim from '@assets/sobre_mim_foto.jpg'

export default function SobreMim() {
    return (
        <PostModelo
            FotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Raniel
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Raniel sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá! Meu nome é Raniel Lopes e sou estudante de Engenharia de Software na Universidade Católica do Salvador, com previsão de conclusão em dezembro de 2028.
            </p>

            <p className={styles.paragrafo}>
                Atualmente, trabalho como Assessor Parlamentar na Câmara Municipal de Salvador, onde adquiri experiência em administração pública e gerenciamento de mídias sociais. Também possuo habilidades em programação, com foco em Python, e já desenvolvi projetos utilizando frameworks como Django.
            </p>

            <p className={styles.paragrafo}>
                Sou voluntário há mais de 5 anos na área de mídia da minha igreja, o que me proporcionou grande experiência em design e edição, utilizando ferramentas como o Photoshop. Além disso, ministro aulas de matemática como parte do meu trabalho voluntário, ajudando jovens a alcançarem seus objetivos acadêmicos.
            </p>

            <p className={styles.paragrafo}>
                Minhas principais certificações incluem liderança, inteligência emocional e administração financeira, o que reflete meu interesse em desenvolvimento pessoal e profissional. Estou constantemente em busca de novos desafios e oportunidades para aplicar meus conhecimentos e crescer como desenvolvedor.
            </p>

            <p className={styles.paragrafo}>
                Além disso, estou me aventurando no desenvolvimento front-end, criando interfaces modernas e funcionais para atender às necessidades dos usuários. Meu objetivo é construir soluções que impactem positivamente a vida das pessoas e contribuam para a sociedade.
            </p>


        </PostModelo>
    )
}
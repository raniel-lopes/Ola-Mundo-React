import { Link, useLocation } from 'react-router'
import styles from './menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {
    const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to='/'>
                    Início
               </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}
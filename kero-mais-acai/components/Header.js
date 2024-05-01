import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/img/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <nav className={styles.nav}>
                <Link className={styles.link} href="/Inicio" passHref><span >Inicio</span></Link>
                <Link className={styles.link} href="/Sobre" passHref><span >Sobre</span></Link>
                <Link className={styles.link} href="/contato" passHref><span >Contato</span></Link>
            </nav>
            <Link className={styles.cta} href="/comprar" passHref><span className={styles.cta}>Peça Já</span></Link>
            <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
            <div className={styles.modal}>
                <nav className={styles.nav}>
                    <div className={styles.logoContainer}>
                        <img src="/img/logo.png" alt="Logo" className={styles.logo} />
                    </div>
                    <div className={styles.navmobile}>


                        <Link href="/Inicio" passHref><span className={styles.link}>Inicio</span></Link>
                        <Link href="/Sobre" passHref><span className={styles.link}>Sobre</span></Link>
                        <Link href="/contato" passHref><span className={styles.link}>Contato</span></Link>
                    </div>
                    <Link href="/comprar" passHref><span className={styles.ctamobile}>Peça Já</span></Link>
                </nav>
            </div>
            <label htmlFor="menu-toggle" className={styles.menuIcon}>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </header>
    );
}


import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="../img/logo.png" alt="Logo" className={styles.logo} />
            </div>

            <nav className={styles.nav}>
                <Link href="/sobre" passHref><span className={styles.link}>Sobre</span></Link>
                <Link href="/produtos" passHref><span className={styles.link}>Produtos</span></Link>
                <Link href="/contato" passHref><span className={styles.link}>Contato</span></Link>
            </nav>
            <Link href="/comprar" passHref><span className={styles.cta}>Compre Aqui</span></Link>

            <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />

            <div className={styles.modal}>
                <nav className={styles.nav}>
                <Link href="/sobre" passHref><span className={styles.link}>Sobre</span></Link>
                <Link href="/produtos" passHref><span className={styles.link}>Produtos</span></Link>
                <Link href="/contato" passHref><span className={styles.link}>Contato</span></Link>
                </nav>
                <Link href="/comprar" passHref>
                    <span className={styles.cta}>Compre Aqui</span>
                </Link>
            </div>

            <label htmlFor="menu-toggle" className={styles.menuIcon}>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </header>
    );
}

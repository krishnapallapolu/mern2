import Link from 'next/link';
import styles from './NavMenu.module.css'; // Import CSS module for styling

const NavMenu: React.FC = () => {
    return (
        <nav className={styles.navMenu}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/register">Sign Up</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/login">Sign In</Link>
                </li>
                {/* Add more links as needed */}
                <li className={styles.navItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
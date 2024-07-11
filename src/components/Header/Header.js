import * as React from 'react';
import * as styles from './Header.module.css';
import Hamburger from './Hamburger';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.search}>

                </div>
                <div className={styles.menu}>

                </div>
                <div className={styles.logo}>

                </div>
                <div className={styles.changeMode}>

                </div>
                <div className={styles.contact}>

                </div>
                <div className={styles.cart}>

                </div>
                
                
            </div>
        </header>
    );
}

export default Header;

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
                <div className={styles.searchArea}>
                    <div className={styles.searchCircle}/>
                    <div className={styles.searchMain}/>
                    <div className={styles.searchBar}/>
                        
                    
                </div>
                <div className={styles.menu}>
                    <nav>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Collections</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="/">Options</a></li>
                        </ul>
                    </nav>

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

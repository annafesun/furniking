import React from 'react';
import styles from './styles.module.scss'

const Main:React.FC<{}> = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};

export default Main;
import React from 'react';
//styles
import styles from './styles.module.scss'

const Privacy: React.FC = () => {
    return (
        <section className={styles.privacy}>
            <div className={styles.containerFluid}>
                <div className={styles.privacyInner}>
                    <p className={styles.copyRight}>© 2021 Funking - All rights reserved.</p>
                    <div className={styles.details}>
                        <a className={styles.button} href='#'>Privacy</a>
                        <a className={styles.button} href='#'>Security</a>
                        <a className={styles.button} href='#'>Term</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
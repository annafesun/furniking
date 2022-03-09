import React from 'react';
//components
import Privacy from "./Privacy";
import Info from "./Info";
//styles
import styles from './styles.module.scss'
import shared from 'styles/shared.module.scss'

type Index = {}

const Footer: React.FunctionComponent<Index> = ({}) => {
    return (
        <footer className={styles.footer}>
           <div className={shared.containerFluid}>
               <Info />
               <div className={styles.line}></div>
               <Privacy />
           </div>
        </footer>
    );
};

export default Footer
import React from 'react';
import {Link} from "react-router-dom";
//styles
import styles from './index.module.scss'
//constants
import {routes} from "../../../../constants/routes";
//mock
import {buttonList} from "../../../Layout/SectionMenu/buttons";

const Menu = () => {
    return (
        <menu className={styles.menu}>
            <ul className={styles.list}>
                {buttonList.map(({key, label}) => (
                    <li
                        key={key}
                        className={styles.listItem}
                    >
                        <Link to={routes[key]}> {label}</Link>
                    </li>
                ))}
            </ul>
        </menu>
    );
};

export default Menu;
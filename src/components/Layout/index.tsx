import React from 'react';
//components
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
//styles
import styles from './styles.module.scss'
import cn from 'classnames'
import SectionMenu from "./SectionMenu";

type Props = {
    theme?: 'white' | 'black'
}

const Layout: React.FC<Props> = ({children, theme = 'white'}) => {
    return (
        <div
            className={
                cn(styles.layout, styles[theme])
            }
        >
            <Header />
            <SectionMenu/>
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    );
};

export default Layout;
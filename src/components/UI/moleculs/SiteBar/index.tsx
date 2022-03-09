import React, {useState} from 'react';
//styles
import styles from './index.module.scss'
import cn from 'classnames'

type Props = {
    textButton?: string;
} & React.HTMLProps<HTMLDivElement>

const buttons = [
    "All",
    "New Arrival",
    "Hot Sale",
    "Furniture",
    "Armature",
    "Table",
    "Chair",
    "Sofa",
    "Mirrors",
    "Stools",
    "Benches",
]

const SiteBar: React.FC<Props> = ({
                                      textButton = 'All Collection',
                                      className
                                  }) => {
    const [opened, setOpened] = useState(true)
    const toggleOpened = () => setOpened(!opened)

    return (
        <div className={cn(styles.siteBar, className)}>
            <a
                href='#'
                className={styles.buttonAllCollection}
                onClick={toggleOpened}
            >
                <span></span>
                <span></span>
                <span></span>
                <p className={styles.textButton}>
                    {textButton}
                </p>
            </a>
            {opened && (
                <ul className={styles.menu}>
                    {buttons.map(button => (
                        <li key={button}>
                            <a
                                href='#'
                                className={styles.menuItem}
                            >
                                {button}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SiteBar;
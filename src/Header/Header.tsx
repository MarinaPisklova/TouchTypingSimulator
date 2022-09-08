import * as React from 'react';
import styles from "./Header.module.css";

export function Header() {
    return (
        <header>
            <div className={styles.titleBox}>
                <h1 className={styles.title}>Тренажер слепой печати</h1>
                <h4 className={styles.subtitle}>
                    Учимся печатать быстро
                </h4>
            </div>
        </header>
    )
}
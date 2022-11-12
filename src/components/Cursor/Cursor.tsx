import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.css";

export function Cursor() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      isVisible ? setIsVisible(false) : setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  })

  return (
    <span className={isVisible ? styles.active : styles.inactive}>|</span>
  )
}
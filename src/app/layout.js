// import './globals.css'
import { Inter } from 'next/font/google'
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}


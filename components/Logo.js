import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Logo() {
    return (

        <div className={styles.Logo}>
            <Link href='/'>
                <a><h1>Vai de Salto VS</h1></a>
            </Link>
        </div>
    )
}
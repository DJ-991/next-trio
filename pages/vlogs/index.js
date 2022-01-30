import styles from '../../styles/Home.module.css';
import Link from 'next/link'

export default function blog() {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h5 className={styles.title}>
                    <Link href="/"><a> {'<-'} Back to Home</a></Link>
                </h5>
                <h1>
                    Welcome to <a href="">Vlogs!</a>
                </h1>
            </main>

        </div>
    )
}

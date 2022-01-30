import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Contact = () => {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h5 className={styles.title}>
                    <Link href="/"><a> {'<-'} Back to Home</a></Link>
                </h5>
                <h1>
                    Welcome to <a href="">Contacts!</a>
                </h1>
            </main>

        </div>
    );
}

export default Contact;

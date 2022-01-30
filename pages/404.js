import Link from 'next/link';
import styles from '../styles/Home.module.css';

function PageNotFound() {
    return (
        <div>
            <section className={styles.page_404}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className={styles.four_zero_four_bg}>
                                    <h1 className="text-center">404</h1>
                                </div>

                                <div className={styles.contant_box_404}>
                                    <h3 className={styles.h2}>
                                        Look like you are lost
                                    </h3>

                                    <p>The page you are looking for not availble!</p>

                                    <Link href="/" ><a className={styles.link_404}>Go to Home</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageNotFound

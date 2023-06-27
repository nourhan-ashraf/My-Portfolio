import React from "react";
import styles from './Contact.module.scss'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { ImBehance2 } from 'react-icons/im'
import { SiUpwork } from 'react-icons/si'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";

const Contact = ({ sectionsRef }) => {
    return (
        <div ref={(ref) => (sectionsRef.current['section4'] = ref)} >
            <div className={styles.contact} >
                <div className={styles.container}>
                    <img src='/smallHighlight1.svg' />
                    <div className={styles.title}>Contact</div>
                </div>
                <br />
                <div className={styles.subTitle}>Get in touch with me on:</div>
                <br />
                <div className={styles.icons}>
                    <Link to="https://github.com/nourhan-ashraf/" target="_blank" rel="noopener noreferrer">
                        <div className={styles.icon_container}>
                            <BsGithub className={styles.icon} />
                        </div>
                    </Link>
                    <Link to="https://www.linkedin.com/in/nourhan-elsherif/" target="_blank" rel="noopener noreferrer">
                        <div className={styles.icon_container}>
                            <BsLinkedin className={styles.icon} />
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/nourhan117461" target="_blank" rel="noopener noreferrer">
                        <div className={styles.icon_container}>
                            <ImBehance2 className={styles.icon} />
                        </div>
                    </Link>
                    <Link to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nourhan.elsherif20@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className={styles.icon_container2}>

                            <CgMail className={styles.icon2} />
                        </div>
                    </Link>
                    <Link to="https://www.upwork.com/freelancers/~017d2207721ba6cc32" target="_blank" rel="noopener noreferrer">
                        <div className={styles.icon_container2}>
                            <SiUpwork className={styles.icon2} />
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact
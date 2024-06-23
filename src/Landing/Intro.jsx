import styles from "../css/Intro.module.css/";
import Button from '@mui/material/Button';

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
            <img 
                src="images/seems.jpg"
                alt=""
                aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
            <h1 className={styles.title}>Tusome</h1>
            <p className={styles.description}>
            A cutting-edge educational tool that enables students to thrive in their academic pursuits 
            by offering access to a vast collection of past exam questions.
            Connecting students with relevant study resources by providing a simple and user-friendly interface for better learning and exam preparation.
            </p>
            <Button variant="contained">Get started</Button>            
             </div>
        </div>
    )
}

export default Intro
import styles from "../css/Findout.module.css/"
import Button from '@mui/material/Button';


const Findout = () => {
    return (
        <section className={styles.findout}>
            <h3 className={styles.title}>Find out more about the quizes</h3>
            <Button variant="contained">Quizes</Button>
        </section>   
    )
}

export default Findout
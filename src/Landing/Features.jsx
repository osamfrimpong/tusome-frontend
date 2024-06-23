import styles from "../css/Features.module.css/"

const Features = () => {

    // eslint-disable-next-line react/prop-types
    function IconTitleText({ icon, title, text }) {
        return (
            <div className={styles.feature}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <h2 className={styles.title}>What To expect</h2>
            <div className={styles.wrapper}>
                <IconTitleText 
                    title={"Wide Range"}
                    text={
                        "We have a wide range of past questions from high schools and universities in Ghana and Kenya"
                    }
                />
                <IconTitleText 
                    title={"Progress Tracking"}
                    text={
                        "Monitor your study progress and be able to continue from where you got to when you return."
                    }
                />
                <IconTitleText 
                    title={"Practice Mode"}
                    text={
                        "Test your knowledge with practice exams that simulate real test."
                    }
                />
            </div>
        </section>
    )
}

export default Features
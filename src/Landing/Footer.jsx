import styles from "../css/Footer.module.css/"

const Footer = () => {

    const more = [
        {
            id: 1,
            title:"Explore",
            links: [
                {id: 10, link: "Home"},
                {id: 11, link: "About"},
                {id: 12, link: "Quizes"},
            ]
        },
        {
            id: 2,
            title:"Help and FAQs",
            links: [
                {id: 20, link: "faq"},
                {id: 21, link: "terms of use"},
                {id: 22, link: "privacy policy"},
            ]
        },
        {
            id: 3,
            title:"contact",
            links: [
                {id: 31, link: "support"},
                {id: 32, link: "Contact Us"}
            ]
        },
        {
            id: 4,
            title:"About Tusome",
            links: [
                {id: 40, link: "About Tusome"},
            ]
        },
    ]

    return (
        <footer className={styles.footer}>
            <hr />
            <div className={styles.more}>
                <Lists />
            </div>
        </footer>
    )

    function Lists() {
        return (
            more.map((list) => {
                return (
                    <ul 
                        className={styles.more_list} 
                        key={list.id}
                    >
                        <li className={styles.title}>{list.title}</li>
                        {list.links.map((linkTxt) => {
                            return (
                                <li 
                                    key={linkTxt.id}
                                    className={styles.item}
                                >
                                    <a href="#" className={styles.redirect}>{linkTxt.link}</a>
                                </li>
                            )
                        })}
                    </ul>
                )
            })
        );
    }
}

export default Footer
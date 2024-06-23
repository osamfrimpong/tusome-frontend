import styles from "../css/Nav.module.css/"

const Nav = () => {
    
    const options = [
        {
            id: 0,
            text: "Quiz"
        },
        {
            id: 1,
            text: "Questions"
        },
        {
            id: 2,
            text: "About Us"
        }
    ]

    const listOptions = options.map((option) => {
        return <li key={option.id}> <a href="#" className={styles.option}>{option.text}</a> </li>
    })

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            {listOptions}
        </ul>
        <button className={styles.view_plans_btn_bar}>Create Account</button>
    </nav>
  )
}

export default Nav
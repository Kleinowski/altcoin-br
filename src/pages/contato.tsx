import styles from '../styles/Contato.module.scss';
export default function Contato() {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <h1>Contato</h1>
        <form action="/action" method="post" className={styles.form}>
          <ul>
            <li>
              <label htmlFor="name">Nome:</label>
            </li>
            <li>
              <input type="text" className={styles.name} name="user_name" />
            </li>

            <li>
              <label htmlFor="name">E-mail:</label>
            </li>
            <li>
              <input
                type="email"
                id="mail"
                name="user_mail"
                className={styles.mail}
              />
            </li>

            <li>
              <label htmlFor="name">Mensagem:</label>
            </li>
            <li>
              <textarea
                className={styles.msg}
                name="user_msg"
                maxLength={32000}
              />
            </li>
            <li>
              <input type="submit" value="Enviar" className={styles.btn} />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

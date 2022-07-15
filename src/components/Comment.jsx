import styles from "./Comment.module.css";

function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/104383155?s=400&u=dd23849e0b8c60a3e7584a0684b7d09dc71e48e0&v=4" alt="" />
           
           <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Cavalcanti</strong> 
                            <time title="13 de julho" dateTime="2022-07-13 11:00:00">Publicado há 1h</time>
                        </div>

                        <button title="Deletar comentários">

                        </button>
                    </header>

                    <p>Muito Bom Devon, parabéns</p>
                </div>

                <footer>
                    <button>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
           </div>
        </div>
    )

}

export default Comment;
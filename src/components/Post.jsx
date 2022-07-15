import Comment from "./Comment";
import styles from "./Post.module.css";

function Post() {
    return(
       <article className={styles.post}>
          <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/104383155?s=400&u=dd23849e0b8c60a3e7584a0684b7d09dc71e48e0&v=4" alt="profile" />
                <div className={styles.authorInfo}>
                  <strong>Felipe Cavalcanti</strong>
                  <span>Web Developer</span>
                </div>
            </div>

            <time title="13 de julho" dateTime="2022-07-13 11:00:00">Publicado há 1h</time>

          </header>

          <div className={styles.content}>
            <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            <p>BBBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
            <p><a href="#">CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</a></p>
            <p><a href="#">DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</a></p>

          </div>

          <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea placeholder="Deixe um comentário" />

            <footer>

              <button type="submit">Publicar</button>

            </footer>
            
          </form>

          <div className={styles.commentList}>
            <Comment /> 
            <Comment /> 
            <Comment />            
          </div>
       </article>
    );
};

export default Post;
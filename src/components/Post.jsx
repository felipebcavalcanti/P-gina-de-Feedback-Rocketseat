import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";



function Post(props) {
  //Functions for format Date.
  const formatDate = format(props.publishAt, "d 'de' LLLL 'às' HH:mm 'h' ", {locale: ptBr})
  const formatDateNow = formatDistanceToNow(props.publishAt, {locale: ptBr, addSuffix: true})

  
  //States for Post and Comments.
  const [comments, setComments] = useState(["Hello world!", ]);
  const [newCommentText, setNewCommentText] = useState("");

  //Function for Submit.
  function hadleSubmitText() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
  };

  //Function for onChange.
  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

    return(
       <article className={styles.post}>
          <header>
            <div className={styles.author}>
                <Avatar hasBorder src= {props.author.avatarUrl} alt="profile" />
                <div className={styles.authorInfo}>
                  <strong>{props.author.name}</strong>
                  <span>{props.author.role}</span>
                </div>
            </div>

            <time title={formatDate} dateTime={props.publishAt.toISOString()}>
              {formatDateNow}
            </time>
                
          </header>

          <div className={styles.content}>
            {props.content.map(line => { 
              if (line.type == "paragraph") {
                return <p>{line.content}</p>
              } else if (line.type == "link") {
                return <p><a href="#">{line.content}</a></p>
              }
        
            })}

          </div>

          <form onSubmit={hadleSubmitText} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
            placeholder="Deixe um comentário..."
            name="comment" 
            onChange={handleNewCommentChange}
            value={newCommentText}
            />

            <footer>

              <button type="submit">Publicar</button>

            </footer>
            
          </form>

          <div className={styles.commentList}>
            {comments.map(comment => {
              return <Comment content={comment}/>
            })}       
          </div>
       </article>
    );
};

export default Post;
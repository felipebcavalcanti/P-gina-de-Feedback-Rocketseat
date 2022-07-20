import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";


import styles from "./App.module.css";
import "./global.css";


const post = [
  {
    id: 1,
    author : {avatarUrl: "https://avatars.githubusercontent.com/u/104383155?s=400&u=dd23849e0b8c60a3e7584a0684b7d09dc71e48e0&v=4",
              name : "Jonathan Woodward",
              role: "Desempregado" 
    },
    content : [
    {type: "paragraph", content: "Fala Galera"},
    {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa, fiz no NLW RETURN"},
    {type: "link", content: "portifa.design/doctorcare"}
    ] ,
    publishAt: new Date("2022-07-18"),     
           
    
  },
  {
    id: 2,
    author : {avatarUrl: "https://avatars.githubusercontent.com/u/104383155?s=400&u=dd23849e0b8c60a3e7584a0684b7d09dc71e48e0&v=4",
              name : "Felipe BC",
              role: "Web Developer" 
    },
    content : [
    {type: "paragraph", content: "Fala Galera"},
    {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa, fiz no NLW RETURN"},
    {type: "link", content: "portifa.design/doctorcare"}
    ] ,
    publishAt: new Date("2022-07-18"),     
           
    
  }
];

function App() {
 

  return (
   <div>
     <Header />

     

     <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post 
              
              author={post.author}
              content={post.content}
              publishAt={post.publishAt} />
            )
          })}
        </main>
     </div>
    </div>
   
  );
}

export default App

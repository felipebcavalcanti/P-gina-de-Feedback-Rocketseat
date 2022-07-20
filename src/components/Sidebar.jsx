import Avatar from "./Avatar";
import styles from "./Sidebar.module.css";


function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className= {styles.cover}src= "https://img.freepik.com/vetores-gratis/fundo-hexagonal-escuro-com-cor-gradiente_79603-1409.jpg?t=st=1657558717~exp=1657559317~hmac=dcbba5794160d7514a719263948980df74d8bdb62274f3ddfa502aa4fc494415&w=400" />

            <div className= {styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/104383155?s=400&u=dd23849e0b8c60a3e7584a0684b7d09dc71e48e0&v=4"
                />


                <strong>Felipe Cavalcanti</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
};


export default Sidebar
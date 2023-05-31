import styles from "../pageLeft/pageLeft.module.css";
import avt from "../../images/avtHome.png";
import Home from "../../images/Frame 13.png";
import Search from "../../images/search.png";
import Notification from "../../images/message-circle.png";
import Createnews from "../../images/plus-square.png";
import menu from "../../images/menu.png";
import { Link } from "react-router-dom";
function PageLeft() {
  return (
    <>
      <div className={styles.PageLeft}>
        <div className={styles.headerControl}>
          <h1 className={styles.title_sidebar}>Zahubook</h1>
          <Link to="/profile">
            <img className={styles.avt} src={avt} alt="images" />
          </Link>
        </div>
        <div className={styles.control}>
          <div className={styles.link}>
            <img src={Home} alt="images" className={styles.icon}/>
            <Link to="/" className={styles.text_link} >Home</Link>
          </div>
          <div className={styles.link}>
            <img src={Search} alt="images" className={styles.icon}/>
            <Link to="/" className={styles.text_link} >Search</Link>
          </div>
          <div className={styles.link}>
            <img src={Notification} alt="images" className={styles.icon}/>
            <Link to="/" className={styles.text_link} >Notification</Link>
          </div>
          <div className={styles.link}>
            <img src={Createnews} alt="images" className={styles.icon}/>
            <Link to="/" className={styles.text_link} >Create news</Link>
          </div>
        </div>
        <div className={styles.more}>
          <img src={menu} alt="images" className={styles.icon}/>
          <Link to="/" className={styles.text_link} >See more</Link>
        </div>
      </div>
    </>
  );
}
export default PageLeft;

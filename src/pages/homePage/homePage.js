import styles from "../homePage/homePage.module.css";
import logo from "../../images/logohome.png";
import avt from "../../images/avtHome.png";
import Home from "../../images/Frame 13.png";
import Search from "../../images/search.png";
import Notification from "../../images/message-circle.png";
import Createnews from "../../images/plus-square.png";
import menu from "../../images/menu.png";
import artAvt from "../../images/Frame 14.png";
import star from "../../images/Star 1.png";
import content from "../../images/Rectangle 3.png";
import heart from "../../images/Vector.png";
import comment from "../../images/message-square.png";
import report from "../../images/flag.png";
import { BiSmile, BiSend} from "react-icons/bi";
import SimpleSlider from "../../components/SimpleSlider";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <div className={styles.HomePage}>
        <div className={styles.HomePageLeft}>
          <div className={styles.headerControl}>
            <img className={styles.logo} src={logo} alt="images" />
            <img className={styles.avt} src={avt} alt="images" />
          </div>
          <div className={styles.control}>
            <div className={styles.Home}>
              <img src={Home} alt="images" />
              <Link to="/"><p>Home</p></Link>
            </div>
            <div className={styles.Search}>
              <img src={Search} alt="images" />
              <Link to="/"><p>Search</p></Link>
            </div>
            <div className={styles.Notification}>
              <img src={Notification} alt="images" />
              <Link to="/"><p>Notification</p></Link>
            </div>
            <div className={styles.Createnews}>
              <img src={Createnews} alt="images" />
              <Link to="/"><p>Create news</p></Link>
            </div>
          </div>
          <div className={styles.More}>
            <img src={menu} alt="images" />
            <p>See more</p>
          </div>
        </div>
        <div className={styles.HomePageRight}>
          <div className={styles.header}>
            <SimpleSlider />
          </div>
          <div className={styles.article}>
            <div className={styles.articleAvt}>
              <img className={styles.artAvt} src={artAvt} alt="images" />
              <p>Mix.Gam</p>
              <img className={styles.star} src={star} alt="images" />
              <a>3 days ago</a>
            </div>
            <div className={styles.articleContent}>
              <img className={styles.content} src={content} alt="images" />
            </div>
            <div className={styles.articleComment}>
              <div className={styles.articleReaction}>
                <div className={styles.articleHeart}>
                  <img className={styles.heart} src={heart} alt="images" />
                  <p>1Tr like</p>
                </div>
                <div className={styles.comment}>
                  <img src={comment} alt="images" />
                </div>
                <div className={styles.report}>
                  <img src={report} alt="images" />
                </div>
              </div>
              <div className={styles.title}>
                <h1>Mix.Gam Hí anh em</h1>
                <p>See all comments</p>
                <p>Add a comment</p>
                <div className={styles.inputCmt}>
                  <BiSmile />
                  <BiSend />
                  <input type="text" name="name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;

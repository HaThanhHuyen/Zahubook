import styles from "../homePage/homePage.module.css";
import logo from "../../images/logohome.png";
import avt from "../../images/avtHome.png";
import Home from "../../images/Frame 13.png";
import Search from "../../images/search.png";
import Notification from "../../images/message-circle.png";
import Createnews from "../../images/plus-square.png";
import menu from "../../images/menu.png";
import avtonline1 from "../../images/Frame 20.png";
import avtonline2 from "../../images/Frame 15.png";
import avtonline3 from "../../images/Frame 17.png";
import avtonline4 from "../../images/Frame 18.png";
import avtonline5 from "../../images/Frame 19.png";
import next from "../../images/Group 6.png";
import artAvt from "../../images/Frame 14.png";
import star from "../../images/Star 1.png";
import content from "../../images/Rectangle 3.png";
import heart from "../../images/Vector.png";
import comment from "../../images/message-square.png";
import report from "../../images/flag.png";
import { BiSmile, BiSend, BiHeart } from "react-icons/bi";

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
              <p>Home</p>
            </div>
            <div className={styles.Search}>
              <img src={Search} alt="images" />
              <p>Search</p>
            </div>
            <div className={styles.Notification}>
              <img src={Notification} alt="images" />
              <p>Notification</p>
            </div>
            <div className={styles.Createnews}>
              <img src={Createnews} alt="images" />
              <p>Create news</p>
            </div>
          </div>
          <div className={styles.More}>
            <img src={menu} alt="images" />
            <p>See more</p>
          </div>
        </div>
        <div className={styles.HomePageRight}>
          <div className={styles.header}>
            <img src={avtonline1} alt="images" />
            <img src={avtonline2} alt="images" />
            <img src={avtonline3} alt="images" />
            <img src={avtonline4} alt="images" />
            <img src={avtonline5} alt="images" />
            <img className={styles.next} src={next} alt="images" />
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
                  {/* <BiHeart id={styles.heart}/> */}
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

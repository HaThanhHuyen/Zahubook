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
import { BiSmile, BiSend } from "react-icons/bi";
import SimpleSlider from "../../components/SimpleSlider";
import { Link } from "react-router-dom";
import PageLeft from "../pageLeft/pageLeft";
function HomePage() {
  return (
    <>
      <div className={styles.HomePage}>
        <div className={styles.HomePageLeft}>
          <PageLeft />
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
                  <div className={styles.heart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={52}
                      viewBox="0 0 54 52"
                      fill="none"
                    >
                      <path
                        d="M48.9903 5.42036C47.7197 4.01898 46.2111 2.9073 44.5507 2.14884C42.8903 1.39038 41.1106 1 39.3133 1C37.516 1 35.7363 1.39038 34.0759 2.14884C32.4154 2.9073 30.9069 4.01898 29.6363 5.42036L26.9993 8.32737L24.3624 5.42036C21.7959 2.59099 18.315 1.00147 14.6854 1.00147C11.0558 1.00147 7.57486 2.59099 5.00836 5.42036C2.44185 8.24973 1 12.0872 1 16.0885C1 20.0899 2.44185 23.9273 5.00836 26.7567L7.64528 29.6637L26.9993 51L46.3534 29.6637L48.9903 26.7567C50.2615 25.356 51.2699 23.6928 51.9579 21.8624C52.6459 20.0319 53 18.0699 53 16.0885C53 14.1071 52.6459 12.1452 51.9579 10.3147C51.2699 8.4842 50.2615 6.82109 48.9903 5.42036Z"
                        stroke="#621E98"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>1Tr like</p>
                  </div>
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

import styles from "../homePage/homeAdmin.module.css";
import Acc from "../../images/Group 59.png";
import Blog from "../../images/Group 40.png"
import contents from "../../images/Group 39.png"
import log from "../../images/log-out.png"
function HomeAdmin() {
  return (
    <>
      <div className={styles.homeAdmin}>
        <div className={styles.homeAdminLeft}>
        <div className={styles.BlogAndAcc}>
            <div className={styles.Blog}>
              <img src={Blog} alt="images" />
              <p>Blogs reported</p>
            </div>
            <div className={styles.Acc}>
              <img src={Acc} alt="images" />
              <p>Account reported</p>
            </div>
            </div>
        </div>
        <div className={styles.homeAdminRight}>
          <div className={styles.header}>
          <div className={styles.repost}>
            <p>Repost</p>
            </div>
            <div className={styles.logout}>
              <button>Log out</button>
              <img src={log} alt="images"/>
            </div>
          </div>
          <div className={styles.contentHome}>
            <div className={styles.contentHomeAdmin}>
            <img src={contents} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeAdmin;

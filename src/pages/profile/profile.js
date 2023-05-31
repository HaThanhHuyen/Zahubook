import styles from "../profile/profile.module.css";
import picture from "../../images/Group 18.png";
import dataArticle from "../../fakeData/dataArticle";
import ListOfArticles from "../profile/articles";
import PageLeft from "../pageLeft/pageLeft";
import menuProfile from "../profile/menuProfile"
function Profile() {
  return (
    <>
      <div className={styles.HomePage}>
        <div className={styles.HomePageLeft}>
        <PageLeft/>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileInfo}>
            <div className={styles.id}>
              <p className={styles.nameId}>Meo_mEO</p>
              {/* <div className={styles.icon}>
                <BiDotsHorizontalRounded />
              </div> */}
              <menuProfile menuOfProfile = {menuProfile}/>
            </div>
            <div className={styles.details}>
              <p>3 post</p>
              <p>12 followers</p>
              <p>Following 293 users</p>
            </div>
            <div className={styles.info}>
              <p>Meo Nguyễn</p>
              <p>12/12/2012</p>
              <p>Sống hướng lội không thích lói nhiều có gì thì ib!!!!</p>
            </div>
            <div className={styles.post}>
              <img src={picture} alt="images" />
              <p>Post</p>
            </div>
          </div>
          <ListOfArticles listArticles={dataArticle} />
        </div>
      </div>
    </>
  );
}
export default Profile;

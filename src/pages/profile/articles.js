import { useState } from "react";
import styles from "../profile/profile.module.css";
import { BiArrowBack, BiDotsVerticalRounded } from "react-icons/bi";
export default function ListOfArticles({ listArticles }) {
  const [isClick, setIsClick] = useState();
  const handleClick = (e) => setIsClick(e);
  return (
    <div className={styles.listArticles}>
      {listArticles.map((a) => (
        <div className={styles.list} key={a.id}>
          <div className={styles.contentPics}>
            <img src={a.img} alt="anh"></img>
            <div className={styles.iconPic} onClick={() => handleClick(a.id)}>
              <BiDotsVerticalRounded />
            </div>
            {isClick === a.id && (
              <div className={styles.menuPics}>
                <div className={styles.menuIcon}>
                  <div onClick={() => handleClick()}>
                    <BiArrowBack />
                  </div>
                </div>
                <div className={styles.menuButton}>
                  <button className={styles.editBtn}>Edit post</button>
                  <button className={styles.deleteBtn}>Delete post</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

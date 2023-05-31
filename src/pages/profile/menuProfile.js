// import { useState } from "react";
// import styles from "../profile/profile.module.css";
// import { BiDotsHorizontalRounded, BiArrowBack } from "react-icons/bi";
// export default function menuOfProfile() {
//   const [isClick, setIsClick] = useState();
//   const handleClick = (e) => setIsClick(e);
//   return (
//     <div className={styles.menuProfile}>
//       <div className={styles.icon} onClick={() => handleClick()}>
//         <BiDotsHorizontalRounded />
//       </div>
//       {isClick(
//         <div className={styles.menuFollow}>
//           <div className={styles.iconProfile}>
//             <div onClick={() => handleClick()}>
//               <BiArrowBack />
//             </div>
//           </div>
//           <div className={styles.menuButton}>
//             <button className={styles.editBtn}>Report post</button>
//             <button className={styles.deleteBtn}>Unfollow</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

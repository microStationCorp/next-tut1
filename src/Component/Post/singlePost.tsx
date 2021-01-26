import { PostInterface } from "../../interfaces/Interface";
import styles from "./SinglePost.module.css";

export default function SinglePost({ post }: { post: PostInterface }) {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div>
            <span className={styles.keyWord}>title</span> :
          </div>
          <div className={styles.resultContainer}>
            <span>{post.title}</span>
          </div>
        </div>
        <div>
          <div>
            <span className={styles.keyWord}>body</span> :
          </div>
          <div className={styles.resultContainer}>
            <span>{post.body}</span>
          </div>
        </div>
      </div>
    </>
  );
}

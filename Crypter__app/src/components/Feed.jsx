import styles from "../styles";
import { feed } from "../constant";

const Feed = () => {
  return (
    <section
      className={`${styles.sectionCenter} py-[64px] px-[32px] lg:py-[0px] lg:pb-[128px] lg:px-[160px] 
      sm:py-[0px] sm:pb-[80px] sm:px-[80px]`}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col gap-[24px]">
          <img src={feed.mainImg} alt="img" />
          <div></div>
        </div>
        <div></div>
        <div className="w-[1px] h-[full] bg-neutrals3 hidden lg:block" />
        <div></div>
      </div>
    </section>
  );
};

export default Feed;

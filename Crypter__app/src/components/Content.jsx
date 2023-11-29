import styles from "../styles";
import { useState, useEffect } from "react";

const Content = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 678);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 678);
    };

    window.addEventListener("resize", handleResize);

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании

  return (
    <section
      className={`${styles.sectionCenter} px-[34px] pt-[64px] sm:px-20 sm:pt-[112px] lg:pt-[128px] lg:px[352px]`}
    >
      <div className="flex flex-col justify-center items-center gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          {isWideScreen ? (
            <p className={`${styles.hairlineSmall} text-[#777E90] text-center`}>
              Create, explore, & collect digital art NFTs.
            </p>
          ) : (
            <p className={`${styles.hairlineSmall} text-[#777E90] text-center`}>
              stacks 1.0
            </p>
          )}
          <h4
            className={`${styles.headline4} text-[#FCFCFD] text-center sm:text-[40px] sm:font-sans sm:tracking-[1.4px] sm:leading-[48px]`}
          >
            The new creative economy.
          </h4>
        </div>
        <button
          className={`${styles.ButtonLarge} rounded-[90px] border-[2px] border-[#777E90] text-[#FCFCFD] py-[14px] max-w-[182px] w-[100%]
          hover:text-[#23262F] hover:border-[#23262F] active:scale-[90%] transition transition-duration: 150ms  hover:bg-[white] `}
        >
          Start your search
        </button>
      </div>
    </section>
  );
};

export default Content;

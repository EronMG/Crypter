import styles from "../styles";
import auction, { images } from "../constant";
import { useState, useEffect } from "react";
import { Bid, View } from "./Buttons";

const Auctions = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании

  return (
    <section
      className={`${styles.padding} flex flex-wrap gap-[32px] md:gap-  lg:gap-[128px] justify-center`}
    >
      <div className="relative max-w-[311px] min-h-[478px]  sm:max-w-[528px] sm:min-h-[800px] lg:max-w-[640px]">
        <img
          src={images.image01}
          alt="image"
          className="object-cover rounded-[16px] max-w-[311px] min-h-[478px] sm:max-w-[528px] sm:min-h-[800px] lg:max-w-[640px]"
        />
        <div className="absolute left-[8px] right-0 bottom-[8px] flex flex-row gap-[24px] justify-center items-center  bg-neutrals1 rounded-[48px] w-[295px] lg:w-[624px] min-h-[40px] px-[20px]">
          <img src={images.play} alt="play" />
          <div className="rounded-[8px] bg-neutrals3 max-w-[383px] w-[100%] min-h-[8px]">
            <div className="rounded-[8px] bg-primaryBlue max-w-[40px] w-[100%] min-h-[8px]"></div>
          </div>
          <p className={`${styles.body2Bold} text-neutrals8 hidden sm:block`}>
            2:20
          </p>
          <img src={images.volume} alt="fs" />
          <img src={images.fullScreen} alt="volume" />
        </div>
      </div>
      <div className="flex flex-col gap-[40px] max-w-[304px] sm:max-w-[352px]">
        <div className="flex flex-col justify-center items-center gap-[23px]">
          {isWideScreen ? (
            <h2 className={`${styles.headline1} text-[#FCFCFD]`}>
              {auction.name}
            </h2>
          ) : (
            <h2 className={`${styles.headline1} text-[#FCFCFD]`}>
              Marco carrillo®
            </h2>
          )}
          <div className="flex flex-row justify-between gap-[42px] lg:gap-[67px] w-full">
            {auction.creator.map((item, index) => (
              <div key={index} className="flex flex-row gap-[8px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-[48px] w-10 h-10"
                />
                <div className="flex flex-col gap-[2px">
                  <span className={`${styles.caption2} text-neutrals4`}>
                    {item.title}
                  </span>
                  <p className={`${styles.caption1Bold} text-neutrals8`}>
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center bg-neutrals2 rounded-[24px] gap-[26px]
        py-7  w-full"
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className={`${styles.body2Bold} text-neutrals8`}>
              {auction.bid}
            </h2>
            <p className={`${styles.headline2} text-neutrals8`}>
              {auction.eth}
            </p>
            <span className={`${styles.body1Bold} text-neutrals4`}>
              {auction.dollars}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className={`${styles.body2Bold} text-neutrals8`}>
              {auction.endtitle}
            </h2>
            <div className="flex flex-row gap-[44px]">
              {auction.endtime.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <h2 className={`${styles.headline4} text-neutrals8`}>
                    {item.time}
                  </h2>
                  <span className={`${styles.body2Bold} text-neutrals4`}>
                    {item.hour}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <Bid />
          <View />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Auctions;

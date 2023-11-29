import styles from "../styles";
import { images } from "../constant";
import Upload from "./Buttons";
import { Connect } from "./Buttons";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header
      className={`${styles.sectionCenter} pt-[48px] pb-[24px] px-[32px] sm:py-[20px] sm:px-[80px] lg:px-[160px] `}
    >
      <nav className="flex flex-row justify-between items-center w-full">
        <div className="flex flx-row justofy-center items-center gap-[32px]">
          <div className="flex flex-1">
            <h1 className={`${styles.body1Bold} text-[#F4F5F6]`}>crypter</h1>
          </div>
          <div className="flex flex-row gap-[32px] justify-center items-center md:flex hidden">
            <div className="w-[2px] h-[40px] bg-[#353945]" />
            <a href="#" className={`${styles.ButtonSmall} text-[#777E90]`}>
              Discover
            </a>
            <a href="#" className={`${styles.ButtonSmall} text-[#777E90]`}>
              How it work
            </a>
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:gap-[24px] hidden">
          <div className="relative">
            <input
              type="text"
              id="search"
              name="search"
              className="border-[2px] border-neutrals3 bg-[#141416] rounded-[8px] focus:outline-none h-full  w-[256px] text-[#777E90] font-poppins"
              placeholder={`Search`}
            />
            <div className="absolute inset-y-0 right-[12px] pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4207 13.5997C11.2918 14.4773 9.87327 14.9998 8.33268 14.9998C4.65078 14.9998 1.66602 12.0151 1.66602 8.33317C1.66602 4.65127 4.65078 1.6665 8.33268 1.6665C12.0146 1.6665 14.9993 4.65127 14.9993 8.33317C14.9993 9.87376 14.4768 11.2923 13.5992 12.4212L18.0886 16.9106C18.414 17.236 18.414 17.7637 18.0886 18.0891C17.7632 18.4145 17.2355 18.4145 16.9101 18.0891L12.4207 13.5997ZM13.3327 8.33317C13.3327 11.0946 11.0941 13.3332 8.33268 13.3332C5.57126 13.3332 3.33268 11.0946 3.33268 8.33317C3.33268 5.57175 5.57126 3.33317 8.33268 3.33317C11.0941 3.33317 13.3327 5.57175 13.3327 8.33317Z"
                  fill="#777E91"
                />
              </svg>
            </div>
          </div>
          <img src={images.statusNew} alt="status" />
          <div className="flex flex-row gap-[12px]">
            <Upload />
            <Connect />
          </div>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={
              toggle ? "/src/assets/CloseBurger.svg" : "/src/assets/Burger.svg"
            }
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <div className="list-none flex flex-wrap justify-center items-center flex-1">
              <div className="flex flex-row gap-[10px]">
                {" "}
                <Upload />
                <Connect />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="border-[2px] border-neutrals3 bg-[#141416] rounded-[8px] focus:outline-none h-full  w-[256px] text-[#777E90] font-poppins"
                  placeholder={`Search`}
                />
                <div className="absolute inset-y-0 right-[12px] pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.4207 13.5997C11.2918 14.4773 9.87327 14.9998 8.33268 14.9998C4.65078 14.9998 1.66602 12.0151 1.66602 8.33317C1.66602 4.65127 4.65078 1.6665 8.33268 1.6665C12.0146 1.6665 14.9993 4.65127 14.9993 8.33317C14.9993 9.87376 14.4768 11.2923 13.5992 12.4212L18.0886 16.9106C18.414 17.236 18.414 17.7637 18.0886 18.0891C17.7632 18.4145 17.2355 18.4145 16.9101 18.0891L12.4207 13.5997ZM13.3327 8.33317C13.3327 11.0946 11.0941 13.3332 8.33268 13.3332C5.57126 13.3332 3.33268 11.0946 3.33268 8.33317C3.33268 5.57175 5.57126 3.33317 8.33268 3.33317C11.0941 3.33317 13.3327 5.57175 13.3327 8.33317Z"
                      fill="#777E91"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import React, { useState } from "react";
import StarLogo from "../Assets/Icons/starLogo";
import MenuOptions from "../components/Header/MenuOptions";
import FindStore from "../components/Header/FindStore";
import SignButton from "../components/Header/SignButton";
import JoinButton from "../components/Header/JoinButton";
import MobileMenuContainer from "./MobileMenuContainer/MobileMenuContainer";
import { Divide as Hamburger } from "hamburger-react";
import "../styles/upperHeader.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="z-[2] upperHeader relative">
      <div className="px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:mx-[auto] min-[1520px]:max-w-[1440px] min-[1520px]:px-[0] min-[1520px]:relative">
        <div className="flex items-center">
          <div>
            <div className="mr-[1.6rem] my-[1.6rem] md:mr-[2.4rem] lg:mr-[4rem] w-[32px] h-[32px] min-[375px]:w-[40px] min-[375px]:h-[40px] md:w-[51px] md:h-[51px] min-[1702px]:absolute min-[1702px]:right-[100%] min-[1702px]:top-[50%] min-[1702px]:translate-y-[-50%]">
              <a href="/" className="block">
                <StarLogo />
              </a>
            </div>
          </div>
          <div className="hidden md:flex lg:items-center grow">
            <MenuOptions />
            <div className="rightPart flex items-center ml-auto gap-x-[4.8rem] shrink-0 text-[1.4rem]">
              <FindStore />
              <div className="flex gap-[16px] items-center">
                <SignButton innerText={"Sign In"} />
                <JoinButton innerText={"Join now"} />
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 top-0 right-0 w-[44px] mx-[1.6rem] md:mx-[2.4rem] md:hidden"
            onClick={handleNav}
          >
            <span className="absolute top-[50%] translate-y-[-50%] right-[10%]">
              <Hamburger
                color="#00000094"
                toggled={isOpen}
                size="24"
                rounded
                toggle={setOpen}
              />
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? `md:hidden bg-black/[.38] fixed left-0 w-full h-[calc(100%-64px)] top-[64px] min-[375px]:h-[calc(100%-72px)] min-[375px]:top-[72px] md:h-[calc(100%-83px)] md:top-[83px] ease-in duration-300`
            : "bg-transparent ease-in duration-300"
        }
      >
        <div
          className={
            nav
              ? `bg-[#fff] pt-[3.2rem] left-[20vw] overflow-auto fixed right-0 w-[80vw] bottom-auto top-[64px] h-[calc(100%-64px)] min-[375px]:h-[calc(100%-72px)] min-[375px]:top-[72px] md:h-[calc(100%-83px)] md:top-[83px] text-left md:hidden ease-out duration-300`
              : `bg-[#fff] pt-[3.2rem] left-[100%] overflow-auto fixed right-[-100%] w-[80vw] bottom-auto top-[64px] h-[calc(100%-64px)] min-[375px]:h-[calc(100%-72px)] min-[375px]:top-[72px] md:h-[calc(100%-83px)] md:top-[83px] text-left md:hidden ease-out duration-300`
          }
          style={{
            boxShadow:
              "inset 0 4px 3px -3px rgb(0 0 0 / 10%), inset 0 4px 2px -2px rgb(0 0 0 / 7%)",
          }}
        >
          <MobileMenuContainer />
        </div>
      </div>
    </header>
  );
};
export default Header;

import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

function NavBar() {
  const {
    handleClick,
    activeMenu,
    setActiveMenu,
    isClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(screenSize);
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
      <TooltipComponent content={title} position="BottomCenter">
        <button
          type="button"
          onClick={customFunc}
          style={{ color }}
          className=" relative text-xl rounded-full p-3
    hover:bg-light-gray "
        >
          <span
            style={{ background: dotColor }}
            className=" absolute inline-flex rounded-full
      h-2 w-6 right-2 top-2
      "
          >
            {icon}
          </span>
        </button>
      </TooltipComponent>
    );
  };

  return (
    <div className="flex  justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prevActiveMenu) => !prevActiveMenu);
        }}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex gap-4">
        <NavButton
          title="Cart"
          customFunc={() => {
            handleClick("cart");
          }}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => {
            handleClick("chat");
          }}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => {
            handleClick("notification");
          }}
          color="blue"
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8 " />
            <p>
              <span className=" text-gray-400 text-14 ">Hi</span>
              <span className=" test-gray-400 font-bold ml-1 text-14 ">
                Arthur
              </span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default NavBar;

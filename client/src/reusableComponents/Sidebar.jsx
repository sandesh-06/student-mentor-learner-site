import { useState } from "react";
import {
  HomeIcon,
  SettingsIcon,
  ArrowLeftCircle,
  ArrowRightCircle
} from "lucide-react";
import {motion} from 'framer-motion';


const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const sidebarItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Home", icon: <HomeIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Home", icon: <HomeIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Home", icon: <HomeIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Home", icon: <HomeIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  
   
    //more sidebar items
  ];

//---------------------------FRAMER MOTION VARIANTS---------------------------------------
const sidebarVariants = {
  open: {
    width: "256px",
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  },
  closed: {
    width: "65px",
    transition: {
      duration: 0.4,
    }
  }
};

const textVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.3, // Delay each item's animation by 0.1s
      duration: 0.5,
    }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0 } // Disable any animation for closed state
  }
};
//---------------------------FRAMER MOTION VARIANTS---------------------------------------

  return (
    <motion.aside
      className={`bg-black text-white absolute h-screen flex flex-col flex-shrink${
        isExpanded ? "w-64 shadow-2xl rounded-r-md" : "w-16"
      } flex flex-col`}

      animate={isExpanded ? "open" : "closed"}
      variants={sidebarVariants}
    >
      {/*1. WEBSITE NAME AND LOGO */}
      <div className="flex p-4 justify-around">
        <img src="https://img.logoipsum.com/288.svg" alt="" className={` ${isExpanded ? "w-36 sm:h-9": "w-0"}`}/>

        <motion.button onClick={toggleSidebar}
        >
          {isExpanded ? <ArrowLeftCircle /> :  <ArrowRightCircle className="h-9"/>}
        </motion.button>

      </div>

      {/* 2. SIDEBAR CONTENTS */}
      <div className="flex flex-1 flex-col pt-1 mt-5">
      {sidebarItems.map((item) => (
              <li key={item.text} className="relative flex items-center py-2 px-4 my-1 font-medium rounded-md cursor-pointer hover:bg-violet-600"
              >
              <span>{item.icon}</span>
              <motion.span className={`ml-10 cursor-pointer ${isExpanded ? "": "hidden"}`}
               animate={isExpanded ? "open" : "closed"}
              variants={textVariants}
              >{item.text}</motion.span>
            </li>
            ))}
      </div>

      {/* 3. USER SECTION */}
      <div className="flex p-3">
            <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" alt="" 
            className="w-10 h-10 rounded-md"
            />
      </div>
    </motion.aside>
  );
};

export default Sidebar;

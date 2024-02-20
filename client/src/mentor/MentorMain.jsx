import { HomeIcon, LayoutDashboardIcon } from "lucide-react";
import Sidebar from "../reusableComponents/Sidebar";
import Sample from "./Sample";

const MentorMain = () => {
  //1. Sidebar items
  const mentorSidebarItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Dashboard", icon: <LayoutDashboardIcon /> },
    // Add more sidebar items as needed
  ];
  return(
    <>
      <Sidebar sidebarItems={mentorSidebarItems} />
      <Sample/>
    </>
  )
};

export default MentorMain;

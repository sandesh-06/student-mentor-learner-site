import { HomeIcon, LayoutDashboardIcon } from "lucide-react";
import Sidebar from "../reusableComponents/Sidebar";
import ProfileFetcher from "./ProfileFetcher";

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
      {/* <Profile/> */}
      <ProfileFetcher />
    </>
  )
};

export default MentorMain;

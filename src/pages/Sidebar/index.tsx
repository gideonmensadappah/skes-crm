import React from "react";
import SidebarCategories from "./sidebarCategories";
import "./index.css";
// import avatar from "../../myImage.jpeg";

const sidebarContents: Array<string> = [
  "Customers",
  "Reports",
  "Orders",
  "Products",
  "Integrations",
  "Agent data",
];

const SideBar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        [Image]
        <img src={""} className="avatart" alt=""></img>
      </div>
      {sidebarContents.map((content, i) => (
        <SidebarCategories category={content} key={i} />
      ))}
    </div>
  );
};
export default SideBar;

import classNames from "classnames";
import React from "react";
import { FcMenu } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS } from "./consts/navigation";
import { Link, useLocation } from "react-router-dom";

const LinkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar() {
  return (
    // <div className="bg-gradient-to-r from-purple-900 to-indigo-600 w-60 p-3 flex flex-col" >
    <div className="bg-[#1D1934] w-60 p-3 flex flex-col">
      <div className="flex iems-center gap-2 px-1 py-3">
        <FcMenu fontSize={24} />
        <span className="text-pink-600 text-lg">Vink</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div>bottom part</div>
    </div>
  );
}
function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname == item.path
          ? "bg-neutral-700 text-darkpink"
          : "text-neutral-400",
        LinkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;

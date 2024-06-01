import MenuLink from "@/components/sidebar/menuLink/menuLink";
import { UserIcon } from '@heroicons/react/24/solid';
import {
  MdAnalytics,
  MdDashboard,
  MdList,
  MdLogout,
  MdSettings
} from "react-icons/md";

const menuItems = [
  {
    title: "Presence",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Permission", path: "/dashboard/permission", icon: <MdAnalytics /> },
      { title: "Student List", path: "/dashboard/studentlist", icon: <MdList /> },
      { title: "Setting", path: "/dashboard/setting", icon: <MdSettings /> },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-72 flex-shrink-0 flex flex-col">
      <div className="flex flex-col items-center py-6">
        <div className="relative w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full mb-2">
          <UserIcon className="h-6 w-6 text-gray-500" /> 
        </div>
        <span className="text-xs text-gray-500">Admin</span>
      </div>
      <ul className="flex-grow px-4">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-gray-500 font-bold text-sm my-2 block">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
        }}
      >
        <button className="p-4 mt-1 flex items-center gap-2 cursor-pointer rounded-lg bg-none border-none text-white w-full hover:bg-gray-700">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;

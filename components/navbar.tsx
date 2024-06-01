"use client";
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop();

  return (
    <div className="bg-gray-800 text-white flex items-center justify-between px-5 py-4 pb-4">
      <div className="text-gray-400 font-bold capitalize">
        {currentPath}
      </div>
      <div className="flex items-center gap-5">
        <MdOutlineChat size={20} />
        <MdNotifications size={20} />
      </div>
    </div>
  );
};

export default Navbar;

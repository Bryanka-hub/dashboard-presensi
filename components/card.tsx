import { MdSupervisedUserCircle } from "react-icons/md";

interface CardProps {
  item: {
    title: string;
    number: number;
    change: number;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-gray-700">
      <MdSupervisedUserCircle size={24} className="text-white" />
      <div className="flex flex-col gap-3">
        <span className="text-white text-lg font-semibold">{item.title}</span>
        <span className="text-2xl font-medium text-white">{item.number}</span>
        <span className="text-sm font-light text-gray-400">
          <span className={item.change > 0 ? "text-lime-400" : "text-white-500"}>
            {item.change}%
          </span>{" "}
          {item.change > 0}
        </span>
      </div>
    </div>
  );
};

export default Card;

import newscard from "../../assets/1.png";

const SmallNewsCard = () => {
  return (
    <div className="flex justify-center gap-2">
      <img className="w-16 h-16" src={newscard} alt="" />
      <p className="py-1 text-sm">ছবিতে ক্ষুদ্র আকারের পবিত্র কোরআন শরিফ</p>
    </div>
  );
};

export default SmallNewsCard;

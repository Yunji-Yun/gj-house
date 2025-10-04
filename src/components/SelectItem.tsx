import minusImg from "../assets/minus.svg";
import plusImg from "../assets/plus.svg";

interface SelectItemProps {
  name: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function SelectItem({
  name,
  quantity,
  onIncrease,
  onDecrease,
}: SelectItemProps) {
  return (
    <div className="w-full flex justify-between items-center rounded-[8px] shadow-[0_0_12px_rgba(0,0,0,0.12)] px-4 py-2 box-border bg-white">
      <div className="font-semibold text-[16px]">{name}</div>
      <div className="flex items-center gap-[3px]">
        <img
          src={minusImg}
          alt="수량 감소"
          className="w-[20px]"
          onClick={onDecrease}
        />
        <div className="flex justify-center items-center w-[50px] h-[20px] rounded-[5px] bg-box font-medium text-[14px]">
          {quantity}
        </div>
        <img
          src={plusImg}
          alt="수량 증가"
          className="w-[20px]"
          onClick={onIncrease}
        />
      </div>
    </div>
  );
}

export default SelectItem;

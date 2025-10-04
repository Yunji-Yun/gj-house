import clearImg from "./assets/clear.svg";
import MenuItem from "./components/MenuItem";
import SelectItem from "./components/SelectItem";
import { menuData } from "./utils/menuData";
import { useCartStore } from "./store/store";

function App() {
  const { selectedItems, addItem, increase, decrease, clear } = useCartStore();

  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col p-5 box-border">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="font-bold text-xl my-4">
            총 결제 금액{" "}
            <span className="text-main">{totalAmount.toLocaleString()}</span>원
          </div>
          <img
            src={clearImg}
            alt="초기화 버튼"
            className="block m-0 p-0"
            onClick={clear}
          />
        </div>
        <div className="w-full aspect-square border border-main bg-box rounded-[5px] p-4 box-border flex flex-col gap-[11px] items-center overflow-y-auto">
          {selectedItems.map((item) => (
            <SelectItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              onIncrease={() => increase(item.id)}
              onDecrease={() => decrease(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col p-5 box-border">
        <div className="font-bold text-xl mb-4">메뉴</div>
        <div className="grid grid-cols-3 gap-x-[9px] gap-y-[14px]">
          {menuData.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              onClick={() => addItem(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

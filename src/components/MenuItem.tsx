interface MenuItemProps {
  name: string;
  price: number;
  onClick: () => void;
}

function MenuItem({ name, price, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="text-[16px] h-[60px] rounded-[8px] flex flex-col items-center justify-center font-semibold shadow-[0_0_12px_rgba(0,0,0,0.12)]"
    >
      <p className="leading-tight">{name}</p>
      <p className="text-main leading-tight">{price.toLocaleString()}</p>
    </button>
  );
}

export default MenuItem;

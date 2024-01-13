interface MenuItemProps {
  item: {
    name: string;
    price: number;
    imageSrc: string;  
  };
  onAdd: (item: { name: string; price: number }) => void;
}

function MenuItem({ item, onAdd }: MenuItemProps) {
  return (
    <div className="menu-item">
      <img src={item.imageSrc} alt={item.name} />  
      <div>
        <h3>{item.name}</h3>
        <p>Цена: {item.price} ₽</p>
        <button onClick={() => onAdd(item)}>Добавить</button> 
      </div>
    </div>
  );
}

export default MenuItem;

import MenuItem from './MenuItem';
import './AddItems.css';

interface AddItemsProps {
  addItem: (item: { name: string; price: number }) => void;
}

function AddItems({ addItem }: AddItemsProps) {
  const menuItems = [
    { name: 'Hamburger', price: 65, imageSrc: '../src/assets/images/hamburgerImage.webp' }, 
  ];

  return (
    <div className="add-items">
      <h2>Add items</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.name} item={item} onAdd={addItem} />
      ))}
    </div>
  );
}

export default AddItems;
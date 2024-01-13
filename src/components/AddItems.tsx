import MenuItem from './MenuItem';
import './AddItems.css';

interface AddItemsProps {
  addItem: (item: { name: string; price: number }) => void;
}

function AddItems({ addItem }: AddItemsProps) {
  const menuItems = [
    { name: 'Hamburger', price: 65, imageSrc: '../src/assets/images/hamburgerImage.webp' }, 
    { name: 'Chickenburger', price: 62, imageSrc: '../src/assets/images/chickenburgerImage.webp' },
    { name: 'Cheeseburger', price: 78, imageSrc: '../src/assets/images/cheeseburgerImage.webp' },
    { name: 'Chicken Premier', price: 173, imageSrc: '../src/assets/images/chickenPremierImage.webp' },
    { name: 'Big Special', price: 299, imageSrc: '../src/assets/images/bigSpecialImage.webp' },
    { name: 'Fries', price: 65, imageSrc: '../src/assets/images/friesImage.webp' },
    { name: 'Strips', price: 115, imageSrc: '../src/assets/images/stripsImage.webp' },
    { name: 'Nuggets', price: 59, imageSrc: '../src/assets/images/nuggetsImage.webp' }, 
    { name: 'Coca-Cola', price: 89, imageSrc: '../src/assets/images/cocaColaImage.webp' }, 
    { name: 'Cappuccino', price: 109, imageSrc: '../src/assets/images/cappuccinoImage.webp' }, 
    { name: 'Cocktail Strawberry', price: 89, imageSrc: '../src/assets/images/cocktailStrawberryImage.webp' }, 
    { name: 'Orange juice', price: 92, imageSrc: '../src/assets/images/orangeJuiceImage.webp' },
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
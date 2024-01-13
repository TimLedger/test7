import MenuItem from './MenuItem';
import './AddItems.css';

interface AddItemsProps {
  addItem: (item: { name: string; price: number }) => void;
}

function AddItems({ addItem }: AddItemsProps) {
  const menuItems = [
    { name: 'Гамбургер', price: 65, imageSrc: '../src/assets/images/hamburgerImage.webp' }, 
    { name: 'Чикенбургер', price: 62, imageSrc: '../src/assets/images/chickenburgerImage.webp' },
    { name: 'Чизбургер', price: 78, imageSrc: '../src/assets/images/cheeseburgerImage.webp' },
    { name: 'Чикен Премьер', price: 173, imageSrc: '../src/assets/images/chickenPremierImage.webp' },
    { name: 'БигМак', price: 299, imageSrc: '../src/assets/images/bigSpecialImage.webp' },
    { name: 'Фри', price: 65, imageSrc: '../src/assets/images/friesImage.webp' },
    { name: 'Стрипсы', price: 115, imageSrc: '../src/assets/images/stripsImage.webp' },
    { name: 'Наггетсы', price: 59, imageSrc: '../src/assets/images/nuggetsImage.webp' }, 
    { name: 'Кока-Кола', price: 89, imageSrc: '../src/assets/images/cocaColaImage.webp' }, 
    { name: 'Капучино', price: 109, imageSrc: '../src/assets/images/cappuccinoImage.webp' }, 
    { name: 'Клубничный милкшейк', price: 89, imageSrc: '../src/assets/images/cocktailStrawberryImage.webp' }, 
    { name: 'Апельсиновый сок', price: 92, imageSrc: '../src/assets/images/orangeJuiceImage.webp' },  
  ];

  return (
    <div className="add-items">
      <h2>Меню</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.name} item={item} onAdd={addItem} />
      ))}
    </div>
  );
}
 
export default AddItems;

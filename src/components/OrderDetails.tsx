import './OrderDetails.css';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetailsProps {
  order: OrderItem[];
  removeItem: (item: OrderItem) => void;
  totalPrice: number;
}

function OrderDetails({ order, removeItem, totalPrice }: OrderDetailsProps) {
  return (
    <div className="order-details">
      <h2>Order Details</h2>
      {order.length === 0 ? (
        <p>No items in the order</p>
      ) : (
        <div>
          <ul>
            {order.map((item) => (
              <li key={item.name}>
                {item.name} x{item.quantity} - ${item.price * item.quantity}
                <button onClick={() => removeItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
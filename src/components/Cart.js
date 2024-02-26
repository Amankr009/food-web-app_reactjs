import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, clearPrice } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const cartPrice = useSelector((store) => store.cart.price);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(clearPrice());
    }

    function totalAmount(total, amount) {
        return total+amount;
    }

    const orderPlaced = () => {
        dispatch(clearCart());
        window.alert("Order Placed 😋");
    }

    return (
        <div className="w-6/12 text-center mx-auto my-4">
            <div className="font-bold">Cart</div>
            {cartItems.length !== 0 &&  <div className="flex justify-between">
                <div>Total - {(cartPrice.reduce(totalAmount, 0)/100)}</div>
                <button className="border-2 border-gray-900 px-4 hover:bg-green-500 active:bg-green-800 rounded" onClick={orderPlaced}>Place Order</button>
            </div>}
            {cartItems.length === 0 && (
            <div className="w-6/12 mx-auto my-8 flex justify-between">
                <div>No Items. Please Add some..</div>
                <Link to="/"><div>➡️</div></Link>
            </div>)
            }
            {cartItems.map((item, index) => (
                <div key={item?.name+"-"+index} className="flex mt-8 mx-auto justify-between" data-testid="cart-item">
                    <div>{item?.name}</div>
                    <div>₹{(item?.price || item?.defaultPrice)/100}</div>
                </div>
            ))}
            {cartItems.length !== 0 && <button className="border-2 border-gray-900 bg-gray-300 m-4 px-4 hover:bg-gray-500 active:bg-green-500 rounded" onClick={handleClearCart}>Clear Cart</button>}
        </div>
    )
}

export default Cart;
import { useSelector } from 'react-redux';
import Swal from 'sweetalert';
import { Products } from '../type/Products';

import { ProductField } from './ProductField';
import { RootState } from '../Reducers/store';

export const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  let count = 0;

  const totalPrice = cart.reduce(
    (accumulator: number,
      currentValue: Products) => {
      count += currentValue.count;

      return accumulator + currentValue.price * currentValue.count;
    },
    0,
  );

  const checkoutHandler = () => {
    Swal(
      'Well done!',
      'Success!',
    );
  };

  return (
    <div className="cart">
      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <ul className="cart__list">
          {cart.length ? cart.map((product: Products) => (
            <ProductField product={product} key={product.itemId} />
          )) : <span>Cart empty</span>}
        </ul>

        <div className="cart__summary" data-cy="productQauntity">
          <p className="cart__summary-text">
            <span>{`$${totalPrice}`}</span>
            <span className="cart__summary-total">
              {`Total for ${count} items`}
            </span>
          </p>

          <hr />

          <button
            type="button"
            className="cart__checkout-button"
            onClick={() => checkoutHandler()}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

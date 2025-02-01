import { useAppSelector } from "@/redux/hooks";

const Cart = () => {
  const cartData = useAppSelector((state) => state.cart);

  console.log("cartData", cartData);

  return (
    <>
      <div className=" mt-2">
        <div className=" container mx-auto">
          <div>Cart</div>
        </div>
      </div>
    </>
  );
};

export default Cart;

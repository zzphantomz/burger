import React, { useState } from "react";
import AuxFile from "../../HOC/AuxFile";
import Button from "../../UI/Button/Button";
import { connect } from "react-redux";
import { successOrder, toggleOrder } from "../../../redux/Order/orderAction";

import Spinner from "../../UI/Spinner/Spinner";
import { resetIngredient } from "../../../redux/BurgerBuild/BurgerAction";
import { withRouter } from "react-router-dom";

const OrderSummary = ({
  ingredients,
  toggleModal,
  successOrder,
  resetBurger,
  price,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {ingredients[igKey]}
      </li>
    );
  });
  const handlePurchase = ({ ingredients, price }) => {
    setLoading(false);
    props.history.push("/checkout");
  };
  return loading ? (
    <Spinner />
  ) : (
    <AuxFile>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {Number.parseFloat(price).toFixed(2)}$</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={() => toggleModal()}>
        Cancel
      </Button>
      <Button
        btnType="Success"
        clicked={() => {
          toggleModal();
          handlePurchase({ ingredients, price });
        }}
      >
        Continue
      </Button>
    </AuxFile>
  );
};

const mapStateToProps = (state) => ({
  ingredients: state.build.ingredients,
  price: state.build.totalPrice,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleOrder),
  resetBurger: () => dispatch(resetIngredient),
  successOrder: (order) => dispatch(successOrder(order)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderSummary));

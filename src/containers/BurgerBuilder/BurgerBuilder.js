import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import AuxFile from "../../components/HOC/AuxFile";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
} from "../../redux/BurgerBuild/BurgerAction";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { toggleOrder } from "../../redux/Order/orderAction";

const BurgerBuilder = ({
  ingredients,
  price,
  purchasable,
  addIng,
  removeIng,
  showModel,
  toggleModal,
}) => {
  return (
    <AuxFile>
      <Modal show={showModel} toggle={toggleModal}>
        <OrderSummary ingredients={ingredients} />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        price={price}
        ingredientAdded={addIng}
        ingredientRemoved={removeIng}
        disable={ingredients}
        purchasable={purchasable}
        purchasing={toggleModal}
      />
    </AuxFile>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.build.ingredients,
    price: state.build.totalPrice,
    purchasable: state.build.purchasable,
    showModel: state.order.purchasing,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addIng: (type) => dispatch(addIngredient(type)),
  removeIng: (type) => dispatch(removeIngredient(type)),
  toggleModal: () => dispatch(toggleOrder),
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);

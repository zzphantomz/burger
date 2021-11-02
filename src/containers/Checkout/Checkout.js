import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useSelector } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import AuxFile from "../../components/HOC/AuxFile";

const Checkout = (props) => {
  const { history } = props;
  const ingredients = useSelector((state) => state.build.ingredients);
  const checkOutCancelHandler = () => {
    history.goBack();
  };
  const checkoutContinuedHandler = () => {
    history.replace("/checkout/contact");
  };
  return (
    <AuxFile>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelled={checkOutCancelHandler}
        checkoutContinue={checkoutContinuedHandler}
      />
      <Route path={props.match.path + "/contact"} component={ContactData} />
    </AuxFile>
  );
};

export default withRouter(Checkout);

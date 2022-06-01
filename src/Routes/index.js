import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export default function RoutesWapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/"></Redirect>;
  }

  return <Route {...rest} component={Component} />;
}

RoutesWapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
RoutesWapper.defaultProps = {
  isPrivate: false,
};  

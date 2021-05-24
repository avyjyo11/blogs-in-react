import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  return <div>{props.user?.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(({ id }) => id === ownProps.id) };
};

export default connect(mapStateToProps)(UserHeader);

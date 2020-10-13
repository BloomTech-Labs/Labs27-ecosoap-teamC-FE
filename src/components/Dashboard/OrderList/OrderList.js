import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getBuyerOrders } from '../../../state/actions/BuyerAction';

import 'antd/dist/antd.css';

function OrderList(props) {
  useEffect(() => {
    props.getBuyerOrders();
  }, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
  };
};

export default connect(mapStateToProps, { getBuyerOrders })(OrderList);
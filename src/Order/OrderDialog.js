import React from 'react';
import styled from 'styled-components';
import {DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

export const OrderModal = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
    top: 300px;
    left: 0px;
    z-index: 12;
  }
`;

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
  return openOrderDialog ? <>
    <DialogShadow/>
    <OrderModal>
      <DialogContent>
        <h2><span role="img" aria-label="pizza dirver">🛵 </span>Order sent!</h2>
        <p>Keep your phone with you your order will be coming soon</p>
      </DialogContent>
      <DialogFooter>
        <ConfirmButton onClick={() => {
          setOrders([]);
          setOpenOrderDialog();
        }}>
          I'm still hungry
        </ConfirmButton>
      </DialogFooter>
    </OrderModal>
  </> : <div/>
}
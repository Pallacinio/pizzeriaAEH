import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';
import { db } from '../firebase';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    position: relative;
    width: 100%;
  }
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
  text-align: left;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

const FormStyled = styled.div`
  height: auto;
  padding: 20px 0px;
  z-index: 20;
  font-weight: bold;
  input {
    border-radius: 5px;
    padding: 5px;
  }
`;

export function Order({ orders, setOrders, setOpenFood, setOpenOrderDialog }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const newOrders = orders.map((order) => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey]) {
        // undefined value
        return acc;
      }
      if (orderKey === 'toppings') {
        return {
          ...acc,
          [orderKey]: order[orderKey]
            .filter(({ checked }) => checked)
            .map(({ name }) => name),
        };
      }
      return {
        ...acc,
        [orderKey]: order[orderKey],
      };
    }, {});
  });

  const [message, setMessage] = useState('');
  const [addres, setAddres] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleName = (event) => {
    setMessage(event.target.value);
  };

  const handleAddres = (event) => {
    setAddres(event.target.value);
  };

  const handleEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const handleNumber = (event) => {
    const numberOnlny = event.target.value.replace(/\D/g, '');
    setNumber(numberOnlny);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('orders')
      .add({
        Price: total,
        newOrders,
        Name: message,
        Addres: addres,
        Email: email,
        Number: number,
      })            
      .then(setOpenOrderDialog(true));
    };
    

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is empty. Check ouer menu and add someting!</OrderContent>
      ) : (
        <OrderContent>
          {' '}
          <OrderContainer> Your Order: </OrderContainer>{' '}
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  🗑
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter((t) => t.checked)
                  .map((topping) => topping.name)
                  .join(', ')}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
          <FormStyled>
            <div />
            <div>Name:</div>
            <input type="text" onChange={handleName} value={message} />
            <div />
            <div>Addres:</div>
            <input type="text" onChange={handleAddres} value={addres} />
            <div />
            <div>Email:</div>
            <input type="email" onChange={handleEmail} value={email} />
            {error && (
              <p style={{ color: 'red', margin: '0.5em 0' }}>{error}</p>
            )}
            <div />
            <div>Number:</div>
            <input
              type="tel"
              maxlength="9"
              required
              onChange={handleNumber}
              value={number}
            />
          </FormStyled>
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton disabled={number.length < 9} onClick={handleSubmit}>Sent</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}

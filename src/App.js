import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { Footer } from './Footer/Footer';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import {OrderDialog} from "./Order/OrderDialog";
import {useOrderDialog} from "./Hooks/useOrderDialog";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const orderDialog = useOrderDialog();

  useTitle({ ...openFood, ...orders });

  return (
    <>
    {/* <ModalContext></ModalContext> */}
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders}/>
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood} {...orderDialog}/>
      <Banner />
      <Menu {...openFood} />
      <Footer />
    </>
  );
}

export default App;

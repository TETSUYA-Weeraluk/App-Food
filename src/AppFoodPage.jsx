import React from "react";
import Cart from "./components/Cart";
import ContentHeader from "./components/ContentHeader";
import FooterAppFood from "./components/FooterAppFood";
import HeaderAppFood from "./components/HeaderAppFood";
import Menu from "./components/Menu";
import NavAppFood from "./components/NavAppFood";
import Order from "./components/Order";
import SubContentHeader from "./components/SubContentHeader";
const AppFoodPage = () => {
  return (
    <div className="w-full text-sm sm:text-base lg:text-lg">
      <NavAppFood />
      <header>
        <HeaderAppFood />
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <Cart />
        <Order />
        <main>
          <ContentHeader />
          <SubContentHeader />
          <Menu />
        </main>
      </div>
      <footer>
        <FooterAppFood />
      </footer>
    </div>
  );
};

export default AppFoodPage;

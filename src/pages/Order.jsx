import React, { useState } from "react";
import PropTypes from "prop-types";
import orderImg from "../assets/shop/banner2.jpg";
import Cover from "../components/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import FoodCard from "./../components/FoodCard";
import { useParams } from "react-router-dom";
import OrderTab from "../components/OrderTab";
const Order = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category == "dessert");
  const soup = menu?.filter((item) => item.category == "soup");
  const salad = menu?.filter((item) => item.category == "salad");
  const pizza = menu?.filter((item) => item.category == "pizza");
  const drinks = menu?.filter((item) => item.category == "drinks");
  const offered = menu?.filter((item) => item.category == "offered");

  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div>
      <Cover
        img={orderImg}
        title={"Order Food"}
        subtitle={"Would you like to try a dish?"}
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

Order.propTypes = {};

export default Order;

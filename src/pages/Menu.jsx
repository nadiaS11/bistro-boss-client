import React from "react";
import PropTypes from "prop-types";
import Cover from "../components/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import soupImg from "../assets/menu/soup-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import MenuCategory from "../components/MenuCategory";
import useMenu from "../hooks/useMenu";
import SectionHeading from "../components/SectionHeading";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category == "dessert");
  const soup = menu?.filter((item) => item.category == "soup");
  const salad = menu?.filter((item) => item.category == "salad");
  const pizza = menu?.filter((item) => item.category == "pizza");
  const offered = menu?.filter((item) => item.category == "offered");

  return (
    <div>
      <Cover
        img={menuImg}
        title={"Our Menu"}
        subtitle={"Would you like to try a dish?"}
      />

      <SectionHeading heading={"Don't miss"} subheading={"Today's offer"} />

      <MenuCategory items={dessert} />
      <MenuCategory items={dessert} img={dessertImg} title={"dessert"} />

      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"} />

      <MenuCategory items={soup} img={soupImg} title={"soup"} />

      <MenuCategory items={salad} img={saladImg} title={"salad"} />
    </div>
  );
};

Menu.propTypes = {};

export default Menu;

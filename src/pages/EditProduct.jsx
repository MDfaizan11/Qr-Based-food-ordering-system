import f1 from "../assets/images/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg";
import f2 from "../assets/images/Gobi-Manchurian-cover-photo-on-white-tile-1-of-1.jpg";
import f3 from "../assets/images/Pizza-3007395.jpg";
import f4 from "../assets/images/margharita-pizza.webp";
import f5 from "../assets/images/Dosa-Recipe-3.jpg";
import f6 from "../assets/images/Soft-Spongy-Idli-Recipe-500x500.jpg";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/editproduct.css";
function EditProduct() {
  useEffect(() => {}, []);
  const { id } = useParams();
  console.log(id);

  // Sample menuItems
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      image: f1,
      price: 300.0,
      category: "Pizza",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      image: f2,
      price: 350.0,
      category: "Pizza",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
    {
      id: 3,
      name: "Classic Samosa",
      image: f3,
      price: 200.0,
      category: "Samosa",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
    {
      id: 4,
      name: "Paneer Samosa",
      image: f4,
      price: 249.0,
      category: "Samosa",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
    {
      id: 5,
      name: "Paneer Samosa",
      image: f5,
      price: 120.0,
      category: "Samosa",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
    {
      id: 6,
      name: "Paneer Samosa",
      image: f6,
      price: 100.0,
      category: "Samosa",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
    {
      id: 7,
      name: "Paneer Samosa",
      image: f6,
      price: 100.0,
      category: "Masala Dosa",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
    {
      id: 8,
      name: "Paneer Samosa",
      image: f6,
      price: 100.0,
      category: "Masala Dosa",
      description:
        "Margherita Pizza is a great product that includes a great amount vegetables.",
    },
  ];

  // Find the menu item to edit
  const menuItemToEdit = menuItems.find((item) => item.id === parseInt(id));

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: menuItemToEdit.name,
    price: menuItemToEdit.price,
    description: menuItemToEdit.description,
    image: menuItemToEdit.image,
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    // Ensure that e.target is defined and has the required properties
    if (!name || !value || !type) return;

    const newValue = type === "file" ? e.target.files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to your backend for updating the product
    console.log(formData);
  };

  return (
    <>
      <div className="dish_heading">
        <h1 style={{ textAlign: "center" }}>
          <b>FOODIES </b> Update Dish
        </h1>
      </div>
      <div className="form_wrapper">
        <div className="dish_form">
          <form onSubmit={handleFormSubmit}>
            <div className="enter_name">
              <input
                type="text"
                name="name"
                placeholder="Enter Dish Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="dish_price">
              <input
                type="number"
                name="price"
                placeholder="Enter Dish Price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="dish_discription">
              <input
                type="text"
                name="description"
                placeholder="Enter Dish Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="dish_image">
              <label htmlFor=""> Food Pic : </label>
              <input
                type="file"
                name="image"
                placeholder="Choose picture"
                onChange={handleInputChange}
              />
            </div>

            <div className="dish_button">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProduct;

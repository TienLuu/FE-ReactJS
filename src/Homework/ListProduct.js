import React, { useState } from "react";
import ItemProduct from "./ItemProduct";

export default function ListProduct({ itemType }) {
  // Phone List
  const [smartPhone] = useState([
    {
      imageLink: "./images/sp_iphoneX.png",
      title: "iPhone X",
      text:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      imageLink: "./images/sp_note7.png",
      title: "Galaxy Note7",
      text:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      imageLink: "./images/sp_vivo850.png",
      title: "Vivo",
      text:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      imageLink: "./images/sp_blackberry.png",
      title: "Blackberry",
      text:
        "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ]);
  // Laptop List
  const [laptop] = useState([
    {
      imageLink: "./images/lt_macbook.png",
      title: "MACBOOK",
      text:
        "The MacBook is a brand of notebook computers manufactured by Apple Inc",
    },
    {
      imageLink: "./images/lt_rog.png",
      title: "ASUS ROG",
      text:
        "The Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices",
    },
    {
      imageLink: "./images/lt_hp.png",
      title: "HP OMEN",
      text:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      imageLink: "./images/lt_lenovo.png",
      title: "LENOVO THINKPAD",
      text:
        "The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012",
    },
  ]);

  const electronics = [
    {
      title: "BEST SMARTPHONE",
      product: smartPhone,
      cssStyle: "container-fluid pt-5 pb-5",
      id: "smartphone",
    },
    {
      title: "BEST LAPTOP",
      product: laptop,
      cssStyle: "container-fluid pt-5 pb-5 bg-light",
      id: "laptop",
    },
  ];

  const i = itemType === "smartphone" ? 0 : 1;

  return (
    <section>
      <div id={electronics[i].id} className={electronics[i].cssStyle}>
        <h1>{electronics[i].title}</h1>
        <div className="row">
          {electronics[i].product.map((item) => (
            <ItemProduct
              imageLink={item.imageLink}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

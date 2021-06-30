import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running Shoes",
    price: "$5",
    image:
      "https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$15",
    image:
      "https://www.musictech.net/wp-content/uploads/2021/02/Hero-MacBookPro-M1-2@2560x1625.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

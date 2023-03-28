import React from "react";
import { CardFavorite } from "../components/CardContent";
import { Layout } from "../components/Layout";

export const Favorites = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 p-3">{/* <CardFavorite /> */}</div>
    </Layout>
  );
};

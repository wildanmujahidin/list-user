import React from "react";
import { CardContent } from "../components/CardContent";
import { Layout } from "../components/Layout";

export const Homepage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3">
        <CardContent />
        <CardContent />
      </div>
    </Layout>
  );
};

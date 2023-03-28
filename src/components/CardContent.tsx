import React from "react";
import { Card, Button } from "react-daisyui";

export const CardContent = () => {
  return (
    <Card>
      <Card.Image src="https://robohash.org/1" alt="Shoes" />
      <Card.Body>
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions className="justify-end">
          <Button>Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

import React from "react";
import { Card, Button } from "react-daisyui";
import { MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";

export const CardContent = () => {
  return (
    <Card>
      <Card.Image src="https://robohash.org/1" alt="Shoes" />
      <Card.Body>
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions className="bg-[#F2F2F2] w-full rounded-xl flex justify-around py-2">
          <MdFavorite
            size={"1.3rem"}
            className="hover:cursor-pointer hover:text-slate-500"
          />
          <FaComment
            size={"1.3rem"}
            className="hover:cursor-pointer hover:text-slate-500"
          />
          <IoArrowRedo
            size={"1.3rem"}
            className="hover:cursor-pointer hover:text-slate-500"
          />
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

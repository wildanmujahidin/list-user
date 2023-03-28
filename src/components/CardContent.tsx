import { FC } from "react";
import { Card, Button } from "react-daisyui";
import { MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { UsersType } from "../utils/types/users";

export const CardContent: FC<UsersType> = ({
  email,
  id,
  name,
  phone,
  username,
  website,
}) => {
  return (
    <Card>
      <Card.Image src={`https://robohash.org/${id}`} alt="image_profile" />
      <Card.Body>
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{email}</p>
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

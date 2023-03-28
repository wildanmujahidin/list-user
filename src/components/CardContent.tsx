import { FC, useEffect } from "react";
import { Card, Button } from "react-daisyui";
import { MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { UsersType } from "../utils/types/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../utils/reducers/reducer";
import classnames from "classnames";

export const CardContent: FC<UsersType> = ({
  email,
  id,
  name,
  phone,
  username,
  website,
  company,
  user,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.data.favorites);
  const isFavorite =
    favorites.findIndex((favorite: UsersType) => favorite.id === user.id) >= 0;
  const favoriteClass = classnames(
    "hover:cursor-pointer hover:text-slate-500",
    {
      "text-red-500": isFavorite,
    }
  );

  const handleAddFavorite = () => {
    const favoriteIndex = favorites.findIndex(
      (favorite: UsersType) => favorite.id === user.id
    );
    if (favoriteIndex >= 0) {
      dispatch(removeFromFavorites(user));
    } else {
      dispatch(addToFavorites(user));
    }
  };
  return (
    <Card>
      <Card.Image
        className="hover:cursor-pointer"
        src={`https://robohash.org/${id}`}
        alt="image_profile"
        onClick={() => {
          navigate(`/users/${id}`);
        }}
      />
      <Card.Body>
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{company?.name}</p>
        <Card.Actions className="bg-[#F2F2F2] w-full rounded-xl flex justify-around py-2">
          <MdFavorite
            size={"1.3rem"}
            className={favoriteClass}
            onClick={handleAddFavorite}
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

export const CardFavorite: FC<UsersType> = ({
  email,
  id,
  name,
  phone,
  username,
  website,
  company,
  user,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRemoveFavorite = () => {
    dispatch(removeFromFavorites(user));
  };
  return (
    <Card>
      <Card.Image
        className="hover:cursor-pointer"
        src={`https://robohash.org/${id}`}
        alt="image_profile"
        onClick={() => {
          navigate(`/users/${id}`);
        }}
      />
      <Card.Body>
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{company?.name}</p>
        <Card.Actions className="justify-end">
          <Button color="secondary" onClick={handleRemoveFavorite}>
            Remove
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

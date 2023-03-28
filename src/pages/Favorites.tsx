import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CardFavorite } from "../components/CardContent";
import { Layout } from "../components/Layout";
import { UsersType } from "../utils/types/users";

export const Favorites = () => {
  const favorites = useSelector((state: any) => state.data.favorites);
  return (
    <Layout>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 p-3">
        {favorites.map((user: UsersType, index: number) => (
          <CardFavorite
            key={index}
            email={user.email}
            id={user.id}
            name={user.name}
            phone={user.phone}
            username={user.username}
            website={user.website}
            company={user.company}
            user={user}
          />
        ))}
      </div>
    </Layout>
  );
};

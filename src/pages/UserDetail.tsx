import { useEffect, useState } from "react";
import axios from "axios";
import { UsersType } from "../utils/types/users";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";

export const UserDetail = () => {
  const [user, setUser] = useState<UsersType>();

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const { user_id } = useParams();

  const getUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${user_id}`)
      .then((datas) => {
        setUser(datas.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  };
  return (
    <Layout>
      <div className="relative">
        <div className="absolute w-full h-52 bg-lime-600 z-0"></div>
        <div className="z-10 relative top-32 ml-8">
          <img
            className="mask mask-circle w-40 bg-slate-700 mb-7"
            src={`https://robohash.org/${user_id}`}
            alt="image_profile"
          />
          <p className="text-2xl font-bold mb-2">{user?.name}</p>
          <p className="text-lg text-slate-400">
            {user?.address?.city}, {user?.address?.street}
          </p>
          <div className="flex">
            <p className="text-lg">{user?.email}</p>
            <p className="text-xl font-extrabold mx-4">·</p>
            <p className="text-lg font-semibold">
              {user?.company?.bs} at {user?.company?.name}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

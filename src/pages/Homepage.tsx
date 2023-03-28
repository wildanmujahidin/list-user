import axios from "axios";
import { useState, useEffect } from "react";
import { CardContent } from "../components/CardContent";
import { Layout } from "../components/Layout";
import { UsersType } from "../utils/types/users";

export const Homepage = () => {
  const [users, setUsers] = useState<UsersType[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((datas) => {
        setUsers(datas.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  };
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 p-3">
        {users.map((user, index) => (
          <CardContent
            key={index}
            email={user.email}
            id={user.id}
            name={user.name}
            phone={user.phone}
            username={user.username}
            website={user.website}
          />
        ))}
      </div>
    </Layout>
  );
};

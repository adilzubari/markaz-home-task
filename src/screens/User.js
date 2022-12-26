import { useEffect, useState } from "react";
import {
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Profile from "./Profile";
import Home from "./Home";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const User = () => {
  const [Auth, setAuth] = useState(null);
  const { isAuthorized } = useAuth();
  const history = useHistory();
  useEffect(() => {
    const subscribe = setTimeout(async () => {
      const auth = await isAuthorized();
      if (auth === false) window.location.pathname = "/";
      else setAuth(true);
    }, 2000);
    return () => clearTimeout(subscribe);
  }, []);

  return (
    <>
      {Auth === null && <b>Please Wait ...</b>}
      {Auth && (
        <Switch>
          <Route exact path="/user/home">
            <Home />
          </Route>
          <Route exact path="/user/profile">
            <Profile />
          </Route>
          <Route exact path="/user">
            <Redirect to="/user/home" />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default User;

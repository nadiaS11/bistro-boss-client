import { useContext } from "react";

import { AuthContext } from "../Authentications/AuthProvider";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

useAuth.propTypes = {};

export default useAuth;

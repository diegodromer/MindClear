import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const useAuth = () => {
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);

  return { isAuthenticated, token };
};

export default useAuth;
// src/Kambaz/Account/ProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate }     from "react-router-dom";
import { type RootState }    from "../store";

export default function ProtectedRoute({ children }: { children: any }) {
  const currentUser = useSelector((s: RootState) => s.account.currentUser);
  return currentUser ? children : <Navigate to="/Kambaz/Account/Signin" />;
}

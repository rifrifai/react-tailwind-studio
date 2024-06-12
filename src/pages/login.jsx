import { Link } from "react-router-dom";
import FormLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <>
      <AuthLayouts title="Login">
        <FormLogin />
        <p className="text-sm mt-3 text-center">
          Don&apos;t have an account? {""}
          <Link to="/register" className="font-bold text-blue-600">
            Sign up
          </Link>
        </p>
      </AuthLayouts>
    </>
  );
}

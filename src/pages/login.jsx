import FormLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <>
      <AuthLayouts title="Login" login="login">
        <FormLogin />
      </AuthLayouts>
    </>
  );
}

import FormRegister from "../components/fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";

export default function RegisterPage() {
  return (
    <>
      <AuthLayouts title="Register" register="register">
        <FormRegister />
        {/* <p className="text-sm mt-3 text-center">
          Have an account? {""}
          <Link to="/login" className="font-bold text-blue-600">
            Login
          </Link>
        </p> */}
      </AuthLayouts>
    </>
  );
}

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-4xl py-1 font-bold">Oops!</h1>
        <p className="text-2xl py-1">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-2xl py-1">{error.statusText || error.message}</p>
      </div>
    </>
  );
}

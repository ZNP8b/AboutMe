import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-xl flex flex-col items-center mt-32">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <p className="font-bold text-2xl">
          {error.statusText || error.message}
        </p>
      </p>
    </div>
  );
}

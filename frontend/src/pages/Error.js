import { useRouteError } from "react-router";
import PageContent from "./PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  let title = "An error occurred!";
  let message = "Something went wrong!";

  const error = useRouteError();
  console.log(error);
  if (error.status === 500) {
    const errorData = JSON.parse(error.data);
    message = errorData.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;

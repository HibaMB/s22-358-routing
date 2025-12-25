import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    //throw { message: "Could not fetch events." }; // Throwing an error to be caught by an errorElement since loader is routing specific
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  }
  return response;
}

export default EventsPage;

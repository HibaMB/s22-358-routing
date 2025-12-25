import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, useLoaderData } from "react-router";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return (
    <Suspense
      fallback={<p>Loading events...</p>}
      style={{ textAlign: "center" }}
    >
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    //throw { message: "Could not fetch events." }; // Throwing an error to be caught by an errorElement since loader is routing specific
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  }
  const resData = await response.json();
  return resData.events;
}

export async function loader() {
  return {
    events: eventsLoader(),
  };
}

export default EventsPage;

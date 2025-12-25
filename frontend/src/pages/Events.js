import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, useLoaderData } from "react-router";
import { loadEvents } from "../helper/EventsLoader.js";

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

export async function loader() {
  return {
    events: loadEvents(),
  };
}

export default EventsPage;

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return [];
  } else {
    const data = await response.json();
    return data.events;
  }
}

export default EventsPage;

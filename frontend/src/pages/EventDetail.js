import { redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected event.",
      }),
      {
        status: 500,
      }
    );
  }
  return response;
}

export async function action({ params, request }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw new Response("Could not delete event.", { status: 500 });
  } else {
    return redirect("/events");
  }
}

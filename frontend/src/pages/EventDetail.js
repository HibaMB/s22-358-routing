import { Link, useParams } from "react-router";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      <p>
        <Link to=".." relative="path">
          Back to Events
        </Link>
      </p>
    </>
  );
}

export default EventDetailPage;

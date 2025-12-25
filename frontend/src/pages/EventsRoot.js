import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";

function EventsRoot() {
  return (
    <>
      <EventsNavigation />
      <Outlet></Outlet>
    </>
  );
}

export default EventsRoot;

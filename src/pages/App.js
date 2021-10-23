import { useAuth0 } from "@auth0/auth0-react";
import Map from "../partials/Map";

function Dash() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="flex">
        <Map />
      </div>
    )
  );
}

export default Dash;

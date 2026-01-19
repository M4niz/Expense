import { MoveRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="relative flex h-[91vh] items-center justify-center bg-gray-50 overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="relative z-10 max-w-md ">
        {/* Animated SVG */}
        <div className="mx-auto mb-6 flex  flex-col h-24 w-24 items-center justify-center rounded-full bg-white shadow">
       <p className="text-red-500 font-bold text-2xl"> 404</p>
       <p className="text-[10px] font-semibold uppercase tracking-wide ">
          error
        </p>
        </div>

        {/* Error Code */}
        

        {/* Title */}
        <h1 className="mt-3 text-xl font-bold tracking-tight text-gray-900">
          Page not found
        </h1>

        {/* Message */}
        <p className="mt-4 text-sm text-gray-600">
          The provided URL{" "}
          <span className="font-medium text-gray-900">
            {location.pathname}
          </span>{" "}
          does not exist.
        </p>

        {/* CTA */}
        <div className="mt-8 flex ">
          <Link
            to="/dashboard"
            className="group inline-flex items-center gap-2 rounded-md bg-orange-400 px-6 py-3 text-xs font-semibold text-white shadow transition hover:bg-orange-600"
          >
            Go to Dashboard
           <MoveRight className="size-4"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

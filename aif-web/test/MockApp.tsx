import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type MockAppPropsType = {
  children: React.ReactElement;
};

const queryClient = new QueryClient();

export const MockApp = ({ children }: MockAppPropsType) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: children,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./Routes";
import "./App.css";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};

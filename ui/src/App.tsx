import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BlockTable } from "./components/BlockTable";
import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BlockTable />
      </QueryClientProvider>
    </div>
  );
}

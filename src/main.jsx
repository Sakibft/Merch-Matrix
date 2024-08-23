import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from "./router/router";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <div id="scrollableContainer" className="overflow-hidden">
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
</div>

);

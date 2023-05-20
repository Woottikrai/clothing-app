
import { QueryClient, QueryClientProvider } from "react-query";
import {  HashRouter, useRoutes } from "react-router-dom";
import routes from './routes/routes';
import { AuthProvider } from './provider/auth/auth.provider';

const AppRoute = () => {
  const appRoute = useRoutes(routes);
  return appRoute;
};

const client = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 0 },
  },
});

function App() {
  

  return (
    <QueryClientProvider client={client}>
      <HashRouter>
        <AuthProvider>
        <AppRoute/>

        </AuthProvider>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App


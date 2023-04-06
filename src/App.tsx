import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Button from "./components/Button/Button";
import Layout from "./components/layouts/layout";
import Home from "./pages/home";
import NotFound from "./pages/notFound/notFound";
import Trending from "./pages/trending";
import VideoDetails from "./pages/video";

// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props: any) => {
  return (
    <div role="alert" className="boundary__error">
      <p>Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <Button onClick={props.resetErrorBoundary}>Restart app</Button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="" element={<Home />} />
            <Route path=":videoId" element={<VideoDetails />} />
          </Route>
          <Route path="/trending" element={<Outlet />}>
            <Route path="" element={<Trending />} />
            <Route path=":videoId" element={<VideoDetails />} />
          </Route>

          {/* Routes that will be matched if none of tthe route(s) is matched */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  );
};

export default App;

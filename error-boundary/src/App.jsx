/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import ApiComponent from './components/ApiComponent'
import { ApiComponentOne } from './components/ApiComponentOne'
import ApiFallbackComponent from './components/ApiFallbackComponent'
import FaultyComponent from './components/FaultyComponent'
import { ErrorBoundary } from 'react-error-boundary'

const ApiFallbackRender = ({ error, resetErrorBoundary }) => {
  // Check for network errors specifically
  const isNetworkError =
    error instanceof TypeError && error.message === "Failed to fetch";

  if (isNetworkError || !navigator.onLine) {
    return (
      <div>
        <h2>No internet connection</h2>
        <p>Please check your connection and try again.</p>
        <button onClick={resetErrorBoundary}>Retry</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try Again</button>
      </div>
    );
  }
};

function App() {
  return (
    <>
      <ErrorBoundary fallbackRender={ApiFallbackRender}>
        <ApiComponentOne />
      </ErrorBoundary>
      {/* <ErrorBoundary FallbackComponent={ApiFallbackComponent}>
        <ApiComponent />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={
          <div style={{ border: "2px solid black" }}>
            Something went wrong. Error in the Faulty Component
          </div>
        }
      >
        <FaultyComponent />
      </ErrorBoundary> */}
      {/* If an error occurs in the above components, the respective fallback UI will be displayed */}
    </>
  );
}

export default App
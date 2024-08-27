/* eslint-disable react/prop-types */

const ApiFallbackComponent = (props) => {
  return (
    <div style={{ border: "2px solid black", marginBottom: "1.5rem" }}>
      <h1>ApiFallbackComponent</h1>
      <h2>Something went wrong!</h2>
      <p>{props?.error?.message}</p>
      <button onClick={props?.resetErrorBoundary}>Try Again</button>
    </div>
  );
}

export default ApiFallbackComponent
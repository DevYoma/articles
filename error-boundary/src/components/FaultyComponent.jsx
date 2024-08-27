/* eslint-disable no-unreachable */
const FaultyComponent = () => {
  // Deliberate error to demonstrate error boundary
  throw new Error('This is a simulated logic error');

  return <div>This will not be rendered</div>;
};

export default FaultyComponent;
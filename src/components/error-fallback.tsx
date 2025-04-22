import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = (props: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{props.error}</pre>
      <button onClick={props.resetErrorBoundary}>Reset Error</button>
    </div>
  );
};

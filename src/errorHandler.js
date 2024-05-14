// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   componentDidCatch(error, errorInfo) {
//     // Update state to indicate error
//     this.setState({ hasError: true });
//     // You can also log the error to an error reporting service
//     console.error('Error caught by ErrorBoundary:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render a fallback UI here
//       return (
//         <div>
//           <h1>Something went wrong.</h1>
//           <p>Please refresh the page or try again later.</p>
//         </div>
//       );
//     }
//     // If no error occurred, render children as normal
//     return this.props.children;
//   }
// }

// // Example component to test error boundary
// const ErrorComponent = () => {
//   // Simulate an error by accessing undefined variable
//   const undefinedVariable = someUndefinedVariable;
//   return (
//     <div>
//       <h2>This component has an error.</h2>
//     </div>
//   );
// };

// // Wrap components you want to be covered by the error boundary with ErrorBoundary
// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <ErrorBoundary>
//         <ErrorComponent />
//       </ErrorBoundary>
//     </div>
//   );
// };

// export default App;

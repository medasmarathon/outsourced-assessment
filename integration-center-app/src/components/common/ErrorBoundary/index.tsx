import { Component, type ErrorInfo, type ReactNode } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error);
      console.error("Component stack:", errorInfo.componentStack);
    }

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="flex min-h-[400px] items-center justify-center rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
          role="alert"
          aria-live="assertive"
        >
          <div className="text-center">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="text-status-warning mb-4 h-16 w-16"
              aria-hidden="true"
            />
            <h2 className="mb-2 text-xl font-semibold text-neutral-700">
              Something went wrong
            </h2>
            <p className="mb-4 text-neutral-600">
              We're sorry, but something unexpected happened.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-700">
                  Error details (development only)
                </summary>
                <pre className="mt-2 overflow-auto rounded bg-neutral-100 p-4 text-xs text-neutral-800">
                  {this.state.error.toString()}
                  {"\n\n"}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="text-brand-primary hover:text-brand-primary-hover mt-4 rounded-lg border-2 border-neutral-100 px-6 py-2 font-medium"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

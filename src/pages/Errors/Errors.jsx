import { Link, Navigate, useParams } from "react-router-dom";
import { useErrorHandler } from "@/hooks/errorHandler";
import { Main } from '@/components/Layout';
import { errors } from '@/data/Errors';

/**
 * The Errors component is responsible for displaying detailed information about an error.
 * It retrieves the error data based on error parameters from the URL.
 * If no matching error is found, it redirects to a not found error page.
 *
 * @component
 *
 * @returns { React.Element } The Errors component if a matching error is found, else a redirection to a not found error page.
 */
function Errors() {
  const { errorParams } = useParams();
  const { error } = useErrorHandler(errors, errorParams);

  if (!error) return (<Navigate to="/error/notfound" />);

  return (
    <Main id="Errors">
      <p className="ErrorCode">{ error.code }</p>
      <p className="ErrorDescription">{ error.description }</p>
      <p className="ErrorMessage">{ error.message }</p>
      <Link className="ErrorLink" to="/">return to homepage</Link>
    </Main>
  );
}

export default Errors;

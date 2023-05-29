import { useEffect, useState } from "react";

/**
 * useErrorHandler is a custom hook that searches for a specific error based on provided parameters.
 * It manages and provides the found error.
 *
 * @function
 * @param { Array.<Object> } errors - The list of errors where the hook will search for a specific error.
 * @param { String } errorParams - The parameters to match against the params property of an error object in the errors array.
 * @returns { Object } An object containing the found error or null if no matching error is found.
 */
function useErrorHandler(errors, errorParams) {
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const foundError = errors.find(error => error.params === errorParams);
    setError(foundError);
  }, [ errors, errorParams ]);

  return { error };
}

export { useErrorHandler };

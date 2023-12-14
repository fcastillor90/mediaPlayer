import React from "react";

export const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [controller, setController] = React.useState(null);

  React.useEffect(() => {
    const aborController = new AbortController();
    setController(aborController);

    fetch(url, { signal: aborController.signal })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("request has been aborted");
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(true));

    return () => aborController.abort();
  }, [url]);

  const cancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Request has been canceled 😔");
    }
  };

  return [data, loading, error, cancelRequest];
};

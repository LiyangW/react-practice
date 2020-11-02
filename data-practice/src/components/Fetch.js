import { useFetch } from "./hooks";
export default function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>loading </p>,
  renderError = (e) => <pre>{JSON.stringify(e, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}

import { getFiles } from "api/filesApi";

import useSWR from "swr";

export default function useFetch() {
  const { data, mutate } = useSWR("/api/files", () => getFiles());

  return { data, mutate };
}

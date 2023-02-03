import { getFiles } from "services/api/filesApi";

import useSWR from "swr";

export default function useFetch() {
  const { data, mutate } = useSWR("/", () => getFiles());

  return { data, mutate };
}

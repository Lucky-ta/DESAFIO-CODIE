import useSWR from "swr";
import { getFiles } from "../services/api/filesApi";

export default function useFetch() {
  const { data, mutate } = useSWR("/", () => getFiles());

  return { data, mutate };
}

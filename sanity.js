import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2023-01-01";
const token =
  import.meta.env.VITE_SANITY_READ_TOKEN || import.meta.env.VITE_SANITY_TOKEN;

let client;

if (!projectId || !dataset) {
  // Provide a safe fallback client in dev so the UI can still render
  console.warn(
    "[sanity] Missing VITE_SANITY_PROJECT_ID or VITE_SANITY_DATASET. Using a mock client that returns empty results."
  );
  client = {
    fetch: async () => [],
    withConfig: () => client,
  };
} else {
  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    ...(token ? { token } : {}),
  });
}

export { client };

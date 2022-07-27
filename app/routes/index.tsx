import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { testServer } from "~/lib/test.server";
import { serviceOnSever } from "~/services.server/service";

// uncomment this code and it'll break on client render
//const test = testServer();
//const service = serviceOnSever();

export const loader = async ({ request }: LoaderArgs) => {
  const test = testServer();
  const service = serviceOnSever();
  return json({ test, service });
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

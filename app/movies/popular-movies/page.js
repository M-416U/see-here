import MainContent from "@/components/MainContent";
import { API_LINKS } from "@/components/API_LINKS";
async function getData() {
  const res = await fetch(API_LINKS.popular_API);
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <MainContent data={data} header={"Popular Movies"} />;
}

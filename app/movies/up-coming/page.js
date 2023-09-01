import MainContent from "@/components/MainContent";
import { API_LINKS } from "@/components/API_LINKS";
async function getData() {
  const res = await fetch(API_LINKS.up_coming);
  return res.json();
}
export default async function page() {
  const data = await getData();
  return <MainContent data={data} header={"Up Coming Movies"} />;
}

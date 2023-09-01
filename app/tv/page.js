import { API_LINKS } from "@/components/API_LINKS";
import MainContent from "@/components/MainContent";
async function getData() {
  const res = await fetch(API_LINKS.main_tv, {
    next: { revalidate: 4500 },
  });
  return res.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <div className="text-center relative">
      <h1 className="text-center font-bold text-3xl">Explore TV</h1>
      <MainContent data={data} header={"TV"} tv={true} />
    </div>
  );
}

import Details from "@/components/Details";
export async function generateMetadata({ params }) {
  const api_key = "2439b9895317f11787da95e8bf9e8782";
  const tvshowid = params.tvshowid;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvshowid}?api_key=${api_key}`
  );
  const jsonData = await response.json();
  return {
    title: jsonData.name,
    description: jsonData.overview,
  };
}
export default function page(props) {
  return <Details params={props.params} tv={true} />;
}

import Banner from "./components/Banner";
import CardWrapper from "./components/CardWrapper";
import Navbar from "./components/Navbar";

export default function Home({data,page}) {  
 

  return (
    <main className="min-h-screen">
      <Navbar/>
      <Banner/>
      <CardWrapper data={data} page={page}/>
    </main>
  )
}

export async function getServerSideProps(ctx) {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=" + ctx.query.page
  );
  const data = await result.json();

  return {
    props: {
      data: data,
      page: parseInt(ctx.query.page) || 1,
    },
  };
}

import Head from "next/head";
import Nav from "../components/ Nav";
import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* NavBar */}
      <Nav />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genres = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genres]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}

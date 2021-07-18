import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import { ApolloClient, gql, useQuery, InMemoryCache } from "@apollo/client";
import OrientationCard from "../components/OrientationCard";

const { GRAPHQL_SERVER } = process.env;

const client = new ApolloClient({
  uri: GRAPHQL_SERVER,
  cache: new InMemoryCache(),
});

const sensorQuery = gql`
  query {
    currentData {
      illuminance {
        value
      }
      angles {
        roll
        pitch
        yaw
      }
    }
  }
`;

export default function Home({ init_data }) {
  const [light, setLight] = useState(
    init_data.data.currentData[0].angles[0].roll
  );

  const [orientation, setOrientation] = useState({
    roll: init_data.data.currentData[0].angles[0].roll,
    pitch: init_data.data.currentData[0].angles[0].pitch,
    yaw: init_data.data.currentData[0].angles[0].yaw,
  });

  const { data, loading, error } = useQuery(sensorQuery, {
    pollInterval: 100,
  });

  useEffect(() => {
    if (data != undefined) {
      setLight(data.currentData[0].illuminance[0].value);
      setOrientation({
        roll: data.currentData[0].angles[0].roll,
        pitch: data.currentData[0].angles[0].pitch,
        yaw: data.currentData[0].angles[0].yaw,
      });
    }
  }, [data]);

  if (loading) return null;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Atom Drone App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.flex}>
        <h1 className={styles.title}>Atom Drone App</h1>
        {/*<p className={styles.description}>Light value: {light}</p>*/}
        <OrientationCard orientation={orientation} />
        <OrientationCard orientation={orientation} />
        <OrientationCard orientation={orientation} />
      </main>

      {/*<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
  </footer>*/}
    </div>
  );
}

export async function getServerSideProps() {
  const init_data = await client.query({
    query: sensorQuery,
    fetchPolicy: "no-cache",
  });

  // Pass data to the page via props
  return { props: { init_data } };
}

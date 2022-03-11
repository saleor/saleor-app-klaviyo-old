import Layout from "../components/Layout";
import { gql, useQuery } from "@apollo/client";

const IndexPage = () => {
  const { data } = useQuery(gql`
    {
      shop {
        domain {
          host
          url
        }
        name
      }
    }
  `);

  return (
    <Layout title="Home">
      <h1>👋</h1>
      <div>{data}</div>
    </Layout>
  );
};

export default IndexPage;

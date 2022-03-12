import Layout from "../components/Layout";
import { useTypedQuery } from "../../zeus/apollo";

const IndexPage = () => {
  const { data } = useTypedQuery({
    shop: {
      name: true,
      description: true,
    },
  });

  return (
    <Layout title="Home">
      <h1>👋</h1>
      <p>{data?.shop.name}</p>
      <p>{data?.shop.description}</p>
    </Layout>
  );
};

export default IndexPage;

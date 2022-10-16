import Page from "../components/Page";
import { increment } from "../store/counterSlice";
import { wrapper } from "../store/store";

const Index = (props) => {
  return <Page title="Index Page" linkTo="/other" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(increment());
});

export default Index;

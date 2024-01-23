import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";

type Props = {
  _site?: Site;
  children?: React.ReactNode;
};

const PageLayout = ({ _site, children }: Props) => {
  return <div className="min-h-screen">{children}</div>;
};

export default PageLayout;

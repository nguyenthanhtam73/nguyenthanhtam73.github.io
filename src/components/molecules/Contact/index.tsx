import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
  loading: () => <Skeleton type="Content" rows={3} />,
});

export default Contact;

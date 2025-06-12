import { redirect } from "next/navigation";

const Home = () => {
  redirect("/products/pens");
};
export default Home;

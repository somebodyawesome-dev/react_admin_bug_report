import { NextPage } from "next";
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("@/components/AdminApp").catch(err=>{console.log(err);return err.toString();}), { ssr: false });

const Home: NextPage = () => <AdminApp />;

export default Home;

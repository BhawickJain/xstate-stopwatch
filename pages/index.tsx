import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";
import Date from "../components/Date";
import utilStyles from "../styles/utils.module.css";
import { Stopwatch } from "../components/Stopwatch";
import { clss } from "../utils/classnames";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={clss(utilStyles.headingMd)}>
          <p>
          A stopwatch created using <a href='https://xstate.js.org/'>xState</a>. 
          </p>
          <p>
          Using a state-machine allows you to more clearly describe the behaviour of a machine.
          </p>
        </section>
        <hr />
        <section className={clss("flex-row", "justify-center")}>
        <Stopwatch />
        </section>
      </>
    </Layout>
  );
}

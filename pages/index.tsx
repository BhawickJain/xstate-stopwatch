import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";
import Date from "../components/Date";
import utilStyles from "../styles/utils.module.css";
import { Stopwatch } from "../components/Stopwatch";

interface HomeProps {
}

/**
 * Note how the home attribute is present without a value
 * within the Layout tag, this is to say that this Layout
 * is the Home page. There is conditional rendering within
 * the Layout component for a home page.
 */
export default function Home({}: HomeProps) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Bhawick Jain</p>
          <p>
            Welcome to the Next.js site, it is a sample typescript project with
            static prerendering. Markdown post have been prerendered into links
            and pages. Below are some posts I have written!
          </p>
        </section>
        <hr />
      <Stopwatch />
      </>
    </Layout>
  );
}


import type { NextPage } from "next";
import IncidentsSection from "../src/incidents";
import ServicesSection from "../src/services";

const isProd = process.env.NODE_ENV === "production";
// En GitHub Pages, el site vive bajo /<repo>. En local es "".
const basePath = isProd ? `/${process.env.NEXT_PUBLIC_REPO_NAME ?? ""}` : "";
const withBasePath = (p: string) => `${basePath}${p}`;

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      {/* Background grid desde /public/grid.svg */}
      <div
        className="mt-20 absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{ backgroundImage: `url(${withBasePath("/grid.svg")})` }}
      ></div>

      <div className="w-full h-40 absolute bg-light-purple dark:purple dark:bg-black">
        <div className="sm:ml-0 ml-5 mr-0 mt-3 md:pl-80 md:pr-80 sm:w-full h-full bg-purple-500 dark:bg-black">
          {/* Logo desde /public/vercel.svg */}
          <img
            src={withBasePath("/vercel.svg")}
            className="w-40 h-16"
            width={150}
            height={100}
            alt="Tailwind Play"
          />
        </div>
      </div>

      <div className="mt-20 w-full absolute overflow-scroll">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Home;

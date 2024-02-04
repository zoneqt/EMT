import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience } = frontmatter;

  return (
    <section className="section mt-16">
      <div className="container text-center">
        {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={1298}
              height={616}
              alt={title}
              className="rounded-lg"
              priority={true}
            />
          </div>
        )}
        {markdownify("About Us", "h1", "h1 text-left lg:text-[55px] mt-12")}

        <div className="content text-left">
          <p>
            Welcome to Efendić Metal Technology, a trailblazer in precision CNC
            manufacturing proudly based in Bosnia. Established three years ago,
            our journey has been one marked by relentless dedication to
            precision engineering and unwavering commitment to delivering
            top-tier manufacturing solutions.<br></br>
            <br></br>
            At EMT, our mission is simple yet profound: to redefine CNC
            manufacturing through innovation, precision, and excellence. We
            strive to be more than just a manufacturer; we aim to be your
            trusted partner in turning ideas into reality.<br></br>
            Behind every successful project is a team of experts dedicated to
            excellence. Meet our seasoned professionals, each bringing a wealth
            of experience and expertise to ensure the success of your projects.
          </p>
        </div>

        <div className="row mt-24 text-left lg:flex-nowrap">
          <div className="experience mt-10 lg:col-6 lg:mt-0">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify("Our Values", "h2", "section-title mb-12")}
              <ul className="row">
                <li className="mb-5 text-lg font-bold text-dark lg:col-6 dark:text-darkmode-light">
                  Collaboration
                </li>
                <li className="mb-5 text-lg font-bold text-dark lg:col-6 dark:text-darkmode-light">
                  Continuous Improvement
                </li>
                <li className="mb-5 text-lg font-bold text-dark lg:col-6 dark:text-darkmode-light">
                  Customer-Centric Focus
                </li>
                <li className="mb-5 text-lg font-bold text-dark lg:col-6 dark:text-darkmode-light">
                  Environmental Stewardship
                </li>
                <li className="mb-5 text-lg font-bold text-dark lg:col-6 dark:text-darkmode-light">
                  Empowerment
                </li>
                <li className="mb-5 text-lg font-bold text-dark lg:col-6 dark:text-darkmode-light">
                  Safety First
                </li>
                <li className="mb-5 text-lg font-bold text-dark lg:col-6 dark:text-darkmode-light">
                  Social Responsibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

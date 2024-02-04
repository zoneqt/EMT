import { markdownify } from "@lib/utils/textConverter";
import heroImage from "public/images/hero-image-cnc.jpg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Base from "@layouts/Baseof";

const About = () => {
  const { t } = useTranslation("home");

  return (
    <Base>
      <section className="section">
        <div className="container text-center">
          <div className=" mb-8 ">
            <Image
              src={heroImage}
              width={1298}
              height={616}
              alt={"About hero image"}
              className="h-[350px] rounded-lg object-cover object-bottom"
              priority={true}
            />
          </div>

          {markdownify(
            t("aboutUsTitle"),
            "h1",
            "h1 text-left lg:text-[55px] mt-12"
          )}

          <div className="content text-left">
            <p dangerouslySetInnerHTML={{ __html: t("aboutUsContent") }}></p>
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
    </Base>
  );
};

export default About;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
};

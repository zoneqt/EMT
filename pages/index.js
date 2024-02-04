import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import { getListPage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DrillingImg from "public/images/drilling.jpg";
import MillingImg from "public/images/milling.jpg";
import TurningImg from "public/images/turning.jpg";

const Home = ({ banner }) => {
  // define state

  const { t } = useTranslation("home");
  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div
              className={
                banner.image_enable
                  ? "mt-12 text-center lg:col-6 lg:mt-0 lg:text-left"
                  : "mt-12 text-center lg:col-12 lg:mt-0 lg:text-left"
              }
            >
              <div className="banner-title">
                {markdownify(t("heroTitle"), "h1")}
                {/*  {markdownify(banner.title_small, "span")} */}
              </div>
              {markdownify(t("heroSmallTitle"), "p", "mt-4")}
              {/*   {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-6"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )} */}
            </div>
            {banner.image_enable && (
              <div className="col-9 lg:col-6">
                <ImageFallback
                  className="mx-auto rounded-[10px] object-contain"
                  src={banner.image}
                  width={548}
                  height={443}
                  priority={true}
                  alt="Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Home main */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-[4rem]">
            <div className="flex gap-[30px]  ">
              <div className="col-6 ">
                <div className="h-[340px] w-full max-w-[640px] rounded-[10px] bg-slate-300"></div>
              </div>
              <div className="col-6 ">
                {markdownify(t("ourStoryTitle"), "h2", "section-title")}
                <p>{t("ourStoryContent")}</p>
              </div>
            </div>
            <div className="flex gap-[30px] ">
              <div className="col-6 ">
                {markdownify(t("ourMissionTitle"), "h2", "section-title")}
                <p>{t("ourMissionContent")}</p>
              </div>
              <div className="col-6 ">
                <div className="h-[340px] w-full max-w-[640px] rounded-[10px] bg-slate-300"></div>
              </div>
            </div>
            <div>
              <h2 className="section-title mb-[60px] text-center">
                {t("services")}
              </h2>
              <div className="flex justify-around gap-[30px] ">
                <div className="flex w-full max-w-[350px] flex-col items-center gap-[20px] rounded-[10px] px-[15px] py-[35px] shadow-[0_3px_20px_rgba(0,0,0,_.1)] dark:shadow-[0_3px_20px_rgba(255,255,255,_.1)]">
                  <ImageFallback
                    className="h-[200px] w-[200px] rounded-full object-cover"
                    src={DrillingImg}
                    width={500}
                    height={200}
                    alt="banner-shape"
                    priority
                  />
                  <h5>{t("drilling")}</h5>
                  <p>{t("drillingContent")}</p>
                </div>
                <div className="flex w-full max-w-[350px] flex-col items-center gap-[20px] rounded-[10px] px-[15px] py-[35px] shadow-[0_3px_20px_rgba(0,0,0,_.1)] dark:shadow-[0_3px_20px_rgba(255,255,255,_.1)]">
                  <ImageFallback
                    className="h-[200px] w-[200px] rounded-full object-cover"
                    src={TurningImg}
                    width={500}
                    height={200}
                    alt="banner-shape"
                    priority
                  />
                  <h5>{t("turning")}</h5>
                  <p>{t("turningContent")}</p>
                </div>
                <div className="flex w-full max-w-[350px] flex-col items-center gap-[20px] rounded-[10px] px-[15px] py-[35px] shadow-[0_3px_20px_rgba(0,0,0,_.1)] dark:shadow-[0_3px_20px_rgba(255,255,255,_.1)]">
                  <ImageFallback
                    className="h-[200px] w-[200px] rounded-full object-cover"
                    src={MillingImg}
                    width={500}
                    height={200}
                    alt="banner-shape"
                    priority
                  />
                  <h5>{t("milling")}</h5>
                  <p>{t("millingContent")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="section-title mb-6 text-center">Location</h2>
      <p className="mb-8 text-center">Armije BiH 171, Bugojno 70230</p>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.35676221237!2d17.40382267666831!3d44.055341226328096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475fa42334dca569%3A0x4a9d120c8324149d!2sEMT%20Efendic%20Metal%20Technology%20Cnc%20Tehnika!5e0!3m2!1sen!2sba!4v1706105797158!5m2!1sen!2sba"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async ({ locale }) => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      banner: banner,
    },
  };
};

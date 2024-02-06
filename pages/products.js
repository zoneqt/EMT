import { markdownify } from "@lib/utils/textConverter";
import heroImage from "public/images/hero-image-cnc.jpg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Base from "@layouts/Baseof";
import products from "config/products.json";
import ImageFallback from "@layouts/components/ImageFallback";

const Products = () => {
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
              className="h-[350px] rounded-lg object-cover object-bottom max-md:h-[250px]"
              priority={true}
            />
          </div>

          <h2 className="section-title mb-[60px] text-center">
            {t("latestProducts")}
          </h2>

          <div className="grid grid-cols-4 gap-[20px] max-md:grid-cols-2 max-sm:grid-cols-1">
            {products.map((product, i) => (
              <ImageFallback
                key={i}
                className="rounded-[10px] object-cover shadow-[0_3px_20px_rgba(0,0,0,_.1)] dark:shadow-[0_3px_20px_rgba(255,255,255,_.1)]"
                src={product.img}
                width={500}
                height={200}
                alt="banner-shape"
                priority
              />
            ))}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Products;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
};

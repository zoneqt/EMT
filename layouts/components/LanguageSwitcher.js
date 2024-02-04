import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import ImageFallback from "@layouts/components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";
import FlagBa from "public/images/ba.svg";
import FlagDe from "public/images/de.svg";
import FlagEn from "public/images/gb.svg";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const changeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  return (
    <div className="relative ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4">
      <div
        className="flex h-full w-full cursor-pointer items-center justify-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IoLanguage className="h-[22px] w-[22px] select-none text-gray-900 dark:text-gray-100" />
      </div>
      {isOpen && (
        <div className="fixed left-[50%] top-0 flex w-full max-w-[600px] translate-x-[-50%] translate-y-[110px] flex-col gap-[20px] rounded-[10px] bg-body p-[20px] shadow-2xl dark:bg-[#111] dark:shadow-[rgba(255,_255,_255,_0.6)]">
          <div>{markdownify("Select language", "h6")}</div>
          <div className="flex gap-[20px]">
            <div
              className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-[10px] rounded-full border shadow dark:border-darkmode-border"
              onClick={() => changeLanguage("en")}
            >
              <ImageFallback
                className="h-[50px] w-[50px] rounded-full object-cover"
                src={FlagEn}
                width={548}
                height={443}
                priority={true}
                alt="Banner Image"
              />
            </div>
            <div
              onClick={() => changeLanguage("de")}
              className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-[10px] rounded-full border shadow dark:border-darkmode-border"
            >
              <ImageFallback
                className="h-[50px] w-[50px] rounded-full object-cover"
                src={FlagDe}
                width={548}
                height={443}
                priority={true}
                alt="Banner Image"
              />
            </div>
            <div
              onClick={() => changeLanguage("ba")}
              className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-[10px] rounded-full border shadow dark:border-darkmode-border"
            >
              <ImageFallback
                className="h-[50px] w-[50px] rounded-full object-cover"
                src={FlagBa}
                width={548}
                height={443}
                priority={true}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

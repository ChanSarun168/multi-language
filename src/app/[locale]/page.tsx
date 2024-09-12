import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/homebg.jpg')" }}
      >
        <h1
          className="font-black text-[150px] text-center text-white h-[180px]"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          métra
        </h1>
        <h3
          className="text-center font-black text-[25px] text-white opacity-70"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          MAKING HOME FOR THE PEOPLE
        </h3>
        <div className="bg-black opacity-50 h-[480px] mt-10 flex justify-center ">
            <div className="w-[60%] py-5 text-center text-white">
              <p className="">{t('description')}</p>
              <h1 className="text-2xl font-bold mt-5">{t('vision')}</h1>
              <p className="">{t('our vision')}</p>
              <h1 className="text-2xl font-bold mt-5">{t('mission')}</h1>
              <p className="">{t('our mission')}</p>
            </div>
        </div>
      </div>
    </>
  );
}

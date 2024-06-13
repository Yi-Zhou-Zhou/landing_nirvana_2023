import { Outlet } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import PaymentNavbar from "../components/PaymentNavbar";
import { useTranslation } from "react-i18next";
import useColorMode from "../hooks/useColorMode";


const SubscriptionPage = () =>
{
  const [t, i18n] = useTranslation("global")
  const [lang, setLang] = useState("es")
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    const userLanguage = navigator.language.split("-")[0]

    if (userLanguage === "es" || userLanguage === "en") {
      setLang(userLanguage)
    } else {
      setLang("en")
    }
  }, [])

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <div className='h-screen'>

      <PaymentNavbar lang={lang} setLang={setLang} colorMode={colorMode} setColorMode={setColorMode} />
      <Outlet />

    </div>
  );
};

export default SubscriptionPage;
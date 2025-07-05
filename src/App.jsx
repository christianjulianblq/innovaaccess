import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4 text-center">
      <img
        src="/logo_bloque.png"
        alt="BLOQUE logo"
        className="w-32 h-auto mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">
        {t("welcome")}
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        {t("description")}
      </p>

      <Button onClick={toggleLanguage} className="flex items-center gap-2">
        <Languages className="w-4 h-4" />
        {t("changeLanguage")}
      </Button>
    </div>
  );
}

export default App;

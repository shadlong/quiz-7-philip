import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const Content = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const text =
    language === "en" ? "Welcome to My App" : "Selamat Datang di Aplikasi Saya";

  return (
    <main className="flex-1 flex items-center justify-center text-center p-8">
      <h2 className="text-2xl font-semibold">{text}</h2>
    </main>
  );
};

export default Content;

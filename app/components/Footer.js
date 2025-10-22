import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const Footer = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <footer className="p-4 border-t text-sm text-center">
      Current Theme: <b>{theme}</b> | Language: <b>{language}</b>
    </footer>
  );
};

export default Footer;

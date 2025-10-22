import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const Header = () => {
  const { toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <header className="p-4 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">My Store</h1>
      <div className="flex gap-2">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          Toggle Theme
        </button>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          Change Language
        </button>
      </div>
    </header>
  );
};

export default Header;

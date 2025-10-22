"use client";
import { useTheme } from "./hooks/useTheme";
import GlobalProvider from "./providers/GlobalProvider";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const AppContent = () => {
  const { theme } = useTheme();
  const appStyle =
    theme === "dark"
      ? "bg-black text-white min-h-screen flex flex-col"
      : "bg-white text-black min-h-screen flex flex-col";

  return (
    <div className={appStyle}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default function Page() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

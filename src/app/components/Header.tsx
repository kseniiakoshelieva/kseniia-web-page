"use client";

import { useTranslations } from "next-intl";
import styles from "../styles/Header.module.css";
import { LanguageSwitch } from "./LanguageSwitch";

export const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className={styles.header}>
      <LanguageSwitch />
      {t("title")}
    </header>
  );
};

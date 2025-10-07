import { ChangeEvent, useTransition } from "react";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { useState } from "react";

type Lng = "ua" | "ru";

export const LanguageSwitch = () => {
  const defaultLocale = useLocale();
  const [selectedLng, setSelectedLng] = useState(defaultLocale);

  const [isPending, startTransition] = useTransition();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value as Lng;
    setSelectedLng(locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div>
      {isPending ? (
        <span>...Loading</span>
      ) : (
        <select
          value={selectedLng}
          onChange={onSelectChange}
          id="lng"
          name="lng"
        >
          <option value="ua">ua</option>
          <option value="ru">ru</option>
        </select>
      )}
    </div>
  );
};

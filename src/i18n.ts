import { i18n } from "@lingui/core";
import { messages as enMessages } from "./locales/en/messages";
import { messages as ptMessages } from "./locales/pt/messages";

export function setupI18n() {
  i18n.load({
    en: enMessages,
    pt: ptMessages,
  });

  i18n.activate("en");
}

export { i18n };


import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';

import { createI18n } from 'vue-i18n';
import { localeSetting } from './localeSetting';
import { useLocaleStoreWithOut } from '@/store/locale';
import { unref, computed } from 'vue';
import { setLoadLocalePool, setHtmlPageLang } from "./helper";
// import moment from 'moment';

const { fallback, availableLocales } = localeSetting;

export let i18n: ReturnType<typeof createI18n>;

interface LangModule {
  message: Recordable;
  momentLocale: Recordable;
  momentLocaleName: string;
}


async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getLocale;
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  setHtmlPageLang(locale);
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale);
  });

  return {
    legacy: false,
    locale,
    fallbackLocale: fallback,
    messages: {
      [locale]: message,
    },
    availableLocales: availableLocales,
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  };
}

// setup i18n instance with glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
}

export function setI18nLanguage(locale: LocaleType) {
  const localeStore = useLocaleStoreWithOut();

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as any).value = locale;
  }
  localeStore.setLocaleInfo({ locale });
  setHtmlPageLang(locale);
}
export async function changeLocale(locale: LocaleType) {
  const globalI18n = i18n.global;
  const currentLocale = unref(globalI18n.locale);
  if (currentLocale === locale) {
    return locale;
  }

  if (loadLocalePool.includes(locale)) {
    setI18nLanguage(locale);
    return locale;
  }
  const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule;
  if (!langModule) return;

  const { message, momentLocale, momentLocaleName } = langModule;

  globalI18n.setLocaleMessage(locale, message);
  // moment.updateLocale(momentLocaleName, momentLocale);
  loadLocalePool.push(locale);

  setI18nLanguage(locale);
  return locale;
}
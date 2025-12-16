import { defineStore } from "pinia";
import { store } from '@/store';
import { createStorage } from '@/utils/storageCache';
import type { LocaleSetting, LocaleType } from '@/locales/localeSetting';
import { LOCALE } from '@/locales/localeSetting';

interface LocaleState {
  localInfo: LocaleSetting;
}

const LOCALE_KEY = "LOCALE_";

const ls = createStorage();

const lsLocaleSetting = (ls.get(LOCALE_KEY) || { localInfo: LOCALE.EN_US }) as LocaleSetting;

export const useLocaleStore = defineStore({
  id: 'app-locale',
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting,
  }),
  getters: {
    getLocale(): LocaleType {
      return this.localInfo?.locale ?? LOCALE.EN_US;
    },
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info };
      ls.set(LOCALE_KEY, this.localInfo);
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo,
      });
    },
  },
});

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
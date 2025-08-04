import { defineStore } from "pinia";
import { store } from '@/store';

export const useStore = defineStore("users", {
  state: () => {
    return {
      sessionId: localStorage.getItem("sessionId") || "",
      enums: "",
      // Whether the route has been dynamically added
      isDynamicAddedRoute: false,
      menuTree: [],
      categoryTree: [],
    };
  },
  actions: {
    saveSessionId(sessionId: string) {
      this.sessionId = sessionId;
      localStorage.setItem("sessionId", sessionId);
    },
    clear() {
      this.sessionId = "";
      localStorage.clear();
    },
    saveEnums(enums: string) {
      this.enums = enums;
      localStorage.setItem("enums", enums);
    },
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    setMenuTree(tree: []) {
      this.menuTree = tree;
    },
    setCategoryTree(tree: []) {
      this.categoryTree = tree;
    },
  },
});

// Need to be used outside the setup
export function useStoreWithOut() {
  return useStore(store);
}
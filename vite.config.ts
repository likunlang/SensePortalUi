import { defineConfig, loadEnv } from "vite";
import type { UserConfig, ConfigEnv } from 'vite';
import vue from "@vitejs/plugin-vue";
import { wrapperEnv } from './build/utils';
import { resolve } from "path";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tailwindcss from '@tailwindcss/vite';

const httpsRE = /^https:\/\//;

export function createProxy(list = []) {
  const ret = {};
  for (const [prefix, target, changeOrigin] of list) {
    const isHttps = httpsRE.test(target);
    ret[prefix] = {
      target: target,
      changeOrigin,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return ret;
}
export default ({ command, mode }: ConfigEnv): UserConfig => {

  const root = process.cwd();

  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  const { VITE_PROXY } = viteEnv;

  return {
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()],
      }),
      tailwindcss(),
    ],
    base: '/',
    server: {
      host: true,
      port: 3100,
      open: true,
      proxy: createProxy(VITE_PROXY),
    },
    resolve: {
      //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "src"),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  }
}


import { resolve } from 'path'
import { defineConfig } from 'vite'

/**
 * vite config
 * @type {import('vite').UserConfig}
 */
export default {
   css:{
       devSourcemap:true
   },
    build:{
       rollupOptions:{
           input:{
               main:resolve(__dirname,'*.html'),
           }
       }
    }
}

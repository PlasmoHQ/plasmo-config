declare namespace NodeJS {
  interface ProcessEnv {
    // Framework env
    __PLASMO_FRAMEWORK_INTERNAL_WATCHER_STARTED?: "true"
    __PLASMO_FRAMEWORK_INTERNAL_SOURCE_MAPS?: "inline" | "external" | "none"
    __PLASMO_FRAMEWORK_INTERNAL_NO_MINIFY?: "true" | "false"

    __PLASMO_FRAMEWORK_INTERNAL_NO_CS_RELOAD?: "true" | "false"

    __PLASMO_FRAMEWORK_INTERNAL_ES_TARGET?:
      | "es3"
      | "es5"
      | "es2015"
      | "es2016"
      | "es2017"
      | "es2018"
      | "es2019"
      | "es2020"
      | "es2021"
      | "es2022"
      | "esnext"
  }
}

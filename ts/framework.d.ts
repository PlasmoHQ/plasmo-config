declare namespace NodeJS {
  interface ProcessEnv {
    // Framework env
    __PLASMO_FRAMEWORK_INTERNAL_WATCHER_STARTED?: "true"
    __PLASMO_FRAMEWORK_INTERNAL_SOURCE_MAPS?: "inline" | "external" | "none"
    __PLASMO_FRAMEWORK_INTERNAL_NO_MINIFY?: "true" | "false"
  }
}

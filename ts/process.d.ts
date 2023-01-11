declare namespace NodeJS {
  interface ProcessEnv {
    // Platform env
    PLASMO_ITERO_ENDPOINT?: string

    // Framework env
    __PLASMO_FRAMEWORK_INTERNAL_WATCHER_STARTED?: "true"
    __PLASMO_FRAMEWORK_INTERNAL_SOURCE_MAPS?: "inline" | "external" | "none"

    /**
     * Absolute path to the project directory
     */
    PLASMO_PROJECT_DIR?: string
    /**
     * Relative path to the source-code directory from project root
     */
    PLASMO_SRC_PATH?: string

    /**
     * this should point to the "source-code directory"
     */
    PLASMO_SRC_DIR?: string

    /**
     * Relative path to the build directory from project root
     */
    PLASMO_BUILD_PATH?: string

    PLASMO_BUILD_DIR?: string

    PLASMO_TAG?: string

    PLASMO_TARGET?: string

    PLASMO_BROWSER?: string
    PLASMO_MANIFEST_VERSION?: string

    // Generic env
    APP_VERSION?: string
    VERBOSE?: "true" | "false"
    NODE_ENV?: "development" | "production" | "test"
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    // Platform env
    PLASMO_ITERO_ENDPOINT?: string

    // Framework env
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

    // Generic env
    APP_VERSION?: string
    VERBOSE?: "true" | "false"
    NODE_ENV?: "development" | "production" | "test"
  }
}

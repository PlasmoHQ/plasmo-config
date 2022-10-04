declare namespace NodeJS {
  interface ProcessEnv {
    // Platform env
    PLASMO_ITERO_ENDPOINT?: string

    // Framework env
    /**
     * Relative path to the source-code directory from project root
     */
    PLASMO_SRC_PATH?: string

    /**
     * this should point to the "source-code directory"
     */
    PLASMO_SRC_DIR?: string

    // Generic env
    APP_VERSION?: string
    VERBOSE?: "true" | "false"
    NODE_ENV?: "development" | "production" | "test"
  }
}

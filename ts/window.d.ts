interface Window {
  analytics: {
    track: (event: string, properties?: any) => void
    identify: (userId: string, traits?: any) => void
    page: (properties?: any) => void
  }

  dataLayer: Array<any>
  gtag: (a: string, b: any, c?: any) => void
}

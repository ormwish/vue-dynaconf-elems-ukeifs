export const metaParser = (metadata: any) => {
    // Parse metadata, extract UI, layout, services, etc.
    return {
      ui: metadata.ui || [],
      layout: metadata.layout || {},
      services: metadata.services || {},
    };
  };
  
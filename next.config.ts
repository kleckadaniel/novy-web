import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/copywriting", destination: "/#sluzby", permanent: true },
      { source: "/copywriting/", destination: "/#sluzby", permanent: true },

      { source: "/konzultace", destination: "/#sluzby", permanent: true },
      { source: "/konzultace/", destination: "/#sluzby", permanent: true },

      { source: "/o-mne", destination: "/#o-mne", permanent: true },
      { source: "/o-mne/", destination: "/#o-mne", permanent: true }
    ];
  }
};

export default nextConfig;

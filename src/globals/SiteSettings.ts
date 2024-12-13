import { VERSION_INTERVAL } from "@/constants";
import { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true;

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      // or where `_status` does not exist
      return {
        or: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            _status: {
              exists: false,
            },
          },
        ],
      };
    },
  },
  versions: VERSION_INTERVAL,
  fields: [
    {
      name: "socialMedia",
      label: "Social Media",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
      defaultValue: [
        {
          label: "Facebook",
          url: "https://www.facebook.com",
        },
        {
          label: "Instagram",
          url: "https://www.instagram.com",
        },
        {
          label: "Twitter",
          url: "https://www.twitter.com",
        },
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com",
        },
        {
          label: "YouTube",
          url: "https://www.youtube.com",
        },
        {
          label: "TikTok",
          url: "https://www.tiktok.com",
        },
      ],
    },
  ],
};

export type WebsiteStatus = "published" | "draft";

export interface Website {
  id: string;
  name: string;
  domain: string;
  status: WebsiteStatus;
  updated: string;
  previewGradient: string;
}

export const websiteStatusStyles: Record<WebsiteStatus, string> = {
  published: "bg-green-100 text-green-700",
  draft:     "bg-gray-100 text-gray-600",
};

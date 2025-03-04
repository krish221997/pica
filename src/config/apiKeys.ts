const API_URL = "https://api.picaos.com"; // You should get this from your environment config

export const apiKeys = {
  secrets: `${API_URL}/v1/event-access`,
  // Add other endpoints as needed
} as const;

export const keys = {
  "list.secret.keys": "secret.keys.list",
  // Add other keys as needed
} as const; 
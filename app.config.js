export default {
  expo: {
    // ... other expo config
    extra: {
      githubClientId: process.env.GITHUB_CLIENT_ID,
    },
    scheme: "your-app-scheme",
  },
}; 
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.3907a10a5ffb4743afbe732a200fbbfd',
  appName: 'elder-mentor-connect',
  webDir: 'dist',
  server: {
    url: 'https://3907a10a-5ffb-4743-afbe-732a200fbbfd.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffff",
      showSpinner: false
    }
  }
};

export default config;
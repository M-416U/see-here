// google-analytics.js
import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-DLMRSMKD1N");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { mainListItems } from "./card/listItems";
import Title from "./card/Title";
import Dashboard from "./card/Dashboard";
import { Grid } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <div className="App">
        <Dashboard />
      </div>
    </CacheProvider>
  );
}

export default App;

import React from "react";
import "./app.css";
import AnnouncementBanner from "./components/announcementBanner/AnnouncementBanner";
import Header from "./components/header/Header";
import Layout from "./containers/layout/Layout";

function App() {
  return (
    <Layout>
      <AnnouncementBanner />
      <Header />
    </Layout>
  );
}

export default App;

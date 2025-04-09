import React from "react";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";
import User from "../Components/User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

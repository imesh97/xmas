"use client";

import Calendar from "@/components/Calendar";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <main className="overflow-hidden bg-re text-foreground">
      <Calendar />
      <Snowfall
        snowflakeCount={18}
        color="#eeeeee"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
    </main>
  );
}

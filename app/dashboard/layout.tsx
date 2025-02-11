import "@/app/styles/global.css";
import SideNav from "@/app/components/sidenav";
import TopNav from "@/app/components/topnav";
import Footer from "@/app/components/footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Top Navigation Bar */}
      <TopNav />

      {/* 🔹 Main Content */}
      <div className="flex flex-grow">
        {/* 🔹 Sidebar (Handles its own toggling) */}
        <SideNav />

        {/* 🔹 Main Page Content */}
        <div className="flex-grow p-6 overflow-y-auto">{children}</div>
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}

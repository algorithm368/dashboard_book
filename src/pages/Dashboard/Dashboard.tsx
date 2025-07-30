// Dashboard.tsx
// This is the main dashboard page for the application. It composes the overall dashboard layout by importing and rendering
// various section components such as the navigation bar, header, statistics, quotes, charts, and currently reading section.
// Each section is responsible for displaying a specific part of the dashboard. The ContentLayout component is used to provide
// consistent page structure and spacing. SubHeaderDashboard is used to label each major section for clarity and organization.

import Navbar from "../../components/Navbar";
import HeaderDashboard from "./components/HeaderDashBoard";
import StatSection from "./components/StatSection";
import ContentLayout from "../../layouts/contentLayout";
import QuoteSection from "./components/qouteSection";
import SubHeaderDashboard from "./components/subHeaderDashboard";
import PagesReadChartSection from "./components/PagesReadChartSecions";
import ReadingByGenreSection from "./components/ReadingByGenreSection";
import CurrentlyReadingSection from "./components/currentlyReadingSection";

export default function Dashboard() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />
      <ContentLayout>
        {/* Main dashboard header */}
        <HeaderDashboard />
        {/* Statistics summary section */}
        <StatSection />
        {/* Motivational or book-related quote */}
        <QuoteSection />
        {/* Section: Reading Activity with chart */}
        <SubHeaderDashboard title="Reading Activity" />
        <PagesReadChartSection />
        {/* Section: Reading By Genre with chart */}
        <SubHeaderDashboard title="Reading By Genre" />
        <ReadingByGenreSection />
        {/* Section: Currently Reading books */}
        <SubHeaderDashboard title="Currently Reading" />
        <CurrentlyReadingSection />
      </ContentLayout>
    </>
  );
}

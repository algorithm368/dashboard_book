import Navbar from "../../components/Navbar";
import HeaderDashboard from "./components/HeaderDashBoard";
import StatSection from "./components/StatSection";
import ContentLayout from "../../layouts/contentLayout";
import QuoteSection from "./components/qouteSection";
import SubHeaderDashboard from "./components/subHeaderDashboard";
import PagesReadChartSection from "./components/PagesReadChartSecions";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <ContentLayout>
        <HeaderDashboard />
        <StatSection />
        <QuoteSection />
        <SubHeaderDashboard title="Reading Activity" />
        <PagesReadChartSection />

      </ContentLayout>
    </>
  );
}

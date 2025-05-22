import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import SectionHeading from "../../components/SectionHeading";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, [showStats]);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <SectionHeading>Stats</SectionHeading>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;

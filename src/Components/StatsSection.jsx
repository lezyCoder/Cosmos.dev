import StatsCard from "./StatsCard"
const StatsSection = () => {
  return (
    <div>
      <div className="stats-section">
        <div className="stat-items container">
          <div className="row g-4">

            {/* Looping over the stats card here  */}
            <div className="col-md-3 col-sm-6 ">
              <StatsCard />
            </div>
            <div className="col-md-3 col-sm-6">
              <StatsCard />
            </div>
            <div className="col-md-3 col-sm-6">
              <StatsCard />
            </div>
            <div className="col-md-3 col-sm-6">
              <StatsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection

import React, { useState } from "react";

function App() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  return (
    <div className="timeline">
      <div className="timeline__inner">
      <div className="hours">
        <div style={{ display:'flex', alignItems: 'center',justifyContent:'center' }} onClick={() => setHours((prev) => prev < 23 ? ++prev : 0)}><img src="/images/arrow-up.png" /></div>
        <div className="content">
          <div className="inner">
            <span>{hours + 2 > 23 ? Math.abs(24 - (hours + 2)) : hours + 2}</span>
            <span>{hours + 1 > 23 ? 24 - (hours + 1) : hours + 1}</span>
          </div>
          <div className="mainTime">{hours}</div>
          <div className="inner">
            <span>{hours - 1 < 0 ? 24 + (hours - 1) : hours - 1}</span>
            <span>{hours - 2 < 0 ? 24 + (hours - 2) : hours - 2}</span>
          </div>
        </div>
        <div style={{ display:'flex', alignItems: 'center',justifyContent:'center' }} onClick={() => setHours((prev) => prev > 0 ? --prev : 23)}><img src="/images/arrow-down.png" /></div>
      </div>
      <div className="bg">:</div>
      <div className="minutes">
        <div style={{ display:'flex', alignItems: 'center',justifyContent:'center' }} onClick={() => setMinutes((prev) => prev < 59 ? ++prev : 0)}><img src="/images/arrow-up.png" /></div>
        <div className="content">
          <div className="inner">
            <span>{minutes + 2 > 59 ? Math.abs(60 - (minutes + 2)) : minutes + 2}</span>
            <span>{minutes + 1 > 59 ? 60 - (minutes + 1) : minutes + 1}</span>
          </div>
          <div className="mainTime">{minutes}</div>
          <div className="inner">
            <span>{minutes - 1 < 0 ? 60 + (minutes - 1) : minutes - 1}</span>
            <span>{minutes - 2 < 0 ? 60 + (minutes - 2) : minutes - 2}</span>
          </div>
        </div>
        <div style={{ display:'flex', alignItems: 'center',justifyContent:'center' }} onClick={() => setMinutes((prev) => prev > 0 ? --prev : 59)}><img src="/images/arrow-down.png" /></div>
      </div>
      </div>
    </div>
  );
}

export default App;

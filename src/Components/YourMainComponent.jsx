import React, { useState, useEffect } from "react";
import SummaryPrompt from "./SummaryPrompt"
import './ImageContainer.css';

const YourMainComponent = () => {
  const [apiResponse, setApiResponse] = useState(null);

  const handleViewSummary = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/view_summary");
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div  >
      <button className="btn btn-danger m-2" onClick={handleViewSummary}  >View Summary</button>
      <button className="btn btn-danger m-2" onClick={handleViewSummary}  >Re-Factor Code</button>
      <p className=" ">
      {apiResponse && (
        <SummaryPrompt summary={apiResponse.summary} />
      )}
      </p>
      
    </div>
  );
};

export default YourMainComponent;

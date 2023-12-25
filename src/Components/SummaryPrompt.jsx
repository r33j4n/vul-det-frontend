import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./summary.css";

const SummaryPrompt = ({ summary }) => {
  useEffect(() => {
    // Display toast notification when the summary appears
    if (summary) {
      toast.success("Summary loaded!", {
        position: "bottom-right",
        autoClose: 3000, // Auto-close the toast after 3000 milliseconds (adjust as needed)
      });
    }
  }, [summary]);

  return (
    <div className="prompt-container-summary">
      <div className="prompt-header-summary">
        <h2>Summary of the Code</h2>
      </div>
      <div className="prompt-content-summary">
        <p>{summary}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SummaryPrompt;

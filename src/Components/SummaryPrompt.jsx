import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./summary.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SummaryPrompt = ({ summary, onClear }) => {
  const [currentSummary, setCurrentSummary] = useState(summary);

  useEffect(() => {
    setCurrentSummary(summary);
    if (summary) {
      toast.error("Vulnerability Detected!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  }, [summary]);

  const handleClear = () => {
    setCurrentSummary('');
    if (onClear) {
      onClear();
    }
  };

  // Remove leading and trailing backticks from the summary
  const cleanedSummary = currentSummary ? currentSummary.replace(/^```\n?/, '').replace(/```$/, '') : '';

  return (
    <div className="prompt-container-summary">
      <div className="prompt-header-summary">
        <h2>Vulnerability Detector</h2>
        <button onClick={handleClear} className="clear-button">Clear</button>
      </div>
      <div className="prompt-content-summary">
        {cleanedSummary && (
          <ReactMarkdown
            children={cleanedSummary}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={prism}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SummaryPrompt;
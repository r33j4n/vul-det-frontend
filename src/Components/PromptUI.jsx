import React, { useState } from "react";
import CodeArea from "./CodeArea";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SummaryPrompt from "./SummaryPrompt";
import YourMainComponent from "./YourMainComponent";
import "./PromptUI.css";

const PromptUI = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [java, setJava] = useState("");
    const [python, setPython] = useState("");
    const [javascript, setJavascript] = useState("");
    const [sql, setSql] = useState("");

    const handleLanguageButtonClick = (language) => {
        setSelectedLanguage(language);

        switch (language) {
            case "java":
                setJava("");
                break;
            case "javascript":
                setJavascript("");
                break;
            case "python":
                setPython("");
                break;
            case "sql":
                setSql("");
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        const postData = {
            language: selectedLanguage,
            content: getContentByLanguage(selectedLanguage)
        };

        axios.post('http://127.0.0.1:5000/getPrompt', postData)
            .then(response => {
                // Handle the response as needed
                toast.success("Submission successful!", {
                    position: "bottom-right",
                    autoClose: 3000,
                });
            })
            .catch(error => {
                // Handle the error as needed
                toast.error("Submission failed. Please try again.", {
                    position: "bottom-right",
                    autoClose: 3000,
                });
            });
    };

    const handleClear = () => {
        switch (selectedLanguage) {
            case "java":
                setJava("");
                break;
            case "javascript":
                setJavascript("");
                break;
            case "python":
                setPython("");
                break;
            case "sql":
                setSql("");
                break;
            default:
                break;
        }

        toast.info("Cleared content!", {
            position: "bottom-right",
            autoClose: 3000,
        });
    };

    const getContentByLanguage = (language) => {
        switch (language) {
            case "java":
                return java;
            case "javascript":
                return javascript;
            case "python":
                return python;
            case "sql":
                return sql;
            default:
                return "";
        }
    };

    return (
        <React.Fragment>
            <div className=" mask gradient-custom-prompt ">
                <div className="d-flex justify-content-around p-2">
                    <button className="p-1 btn ">
                        <p className="titlefont-prompt  ">
                            <b> Choose the Language</b>{" "}
                        </p>
                    </button>
                    <div className="d-flex justify-content-center p-2">
                        <button
                            type="button"
                            className={`btn btn-primary m-1 ${selectedLanguage === "java" ? "selected" : ""}`}
                            onClick={() => handleLanguageButtonClick("java")}
                        >
                            Java
                        </button>
                        <button
                            type="button"
                            className={`btn btn-primary  m-1 ${selectedLanguage === "javascript" ? "selected" : ""}`}
                            onClick={() => handleLanguageButtonClick("javascript")}
                        >
                            JavaScript
                        </button>
                        <button
                            type="button"
                            className={`btn btn-primary  m-1 ${selectedLanguage === "python" ? "selected" : ""}`}
                            onClick={() => handleLanguageButtonClick("python")}
                        >
                            Python
                        </button>
                        <button
                            type="button"
                            className={`btn btn-primary m-1 ${selectedLanguage === "sql" ? "selected" : ""}`}
                            onClick={() => handleLanguageButtonClick("sql")}
                        >
                            SQL
                        </button>
                    </div>
                </div>
            </div>
            <CodeArea
                className="text-align-left"
                language={selectedLanguage === "java" ? "text/x-java" : selectedLanguage}
                displayName={selectedLanguage}
                value={getContentByLanguage(selectedLanguage)}
                onChange={
                    selectedLanguage === "java"
                        ? setJava
                        : selectedLanguage === "python"
                        ? setPython
                        : selectedLanguage === "javascript"
                        ? setJavascript
                        : selectedLanguage === "sql"
                        ? setSql
                        : () => {}
                }
            />
            <div className="d-flex justify-content-center p-2">
                <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
            <YourMainComponent />
            <ToastContainer />
        </React.Fragment>
    );
}

export default PromptUI;

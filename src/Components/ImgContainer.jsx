import React from "react";
import BackImage from "../Images/background.jpeg";
import "./ImageContainer.css";
const ImageContainer = () => {
    return (
        <React.Fragment>
            <div
                className="bg-image"
                style={{
                    backgroundImage: `url(${BackImage})`,
                    width: '100%'
                    // height: "75vh",
                }}
            >
                <div className="mask gradient-custom h-100">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="p-3">
                            <b>
                                <p className="text-white mb-0 titlefont m-2 p-2 w-100 textmq">
                                    DeCod3
                                </p>
                            </b>
                        </div>
                        <div>
                            <b>
                                <p className="subtext h-25 w-100">
                                Introducing deCod3 - your coding confidant! Unravel the mysteries of code with a touch of humor. Powered by a savvy combo of large language models and LangChain, it's your code whisperer!                                </p>
                            </b>
                        </div>
                          {/* BEGIN: ed8c6549bwf9 */}
            {Array(14).fill(<br />)}
            {/* END: ed8c6549bwf9 */}
                    </div>
                </div>
            </div>
          
        </React.Fragment>
    );
};

export default ImageContainer;

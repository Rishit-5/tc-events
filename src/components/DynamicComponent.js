import React from "react";

export default function DynamicComponent() {
    const dialogues = [
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/15/asset/buzzfeed-prod-fastlane-02/sub-buzz-15945-1491851513-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/14/asset/buzzfeed-prod-fastlane-02/sub-buzz-1319-1491847398-5.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/14/asset/buzzfeed-prod-fastlane-03/sub-buzz-31032-1491847942-7.png?downsize=600:*&output-format=auto&output-quality=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/7/17/asset/buzzfeed-prod-fastlane-03/sub-buzz-3883-1491601994-2.png?downsize=600:*&output-format=auto&output-quality=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/7/17/asset/buzzfeed-prod-fastlane-01/sub-buzz-6195-1491600854-3.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/7/17/asset/buzzfeed-prod-fastlane-02/sub-buzz-6511-1491600854-1.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/14/asset/buzzfeed-prod-fastlane-01/sub-buzz-13904-1491848722-3.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/14/asset/buzzfeed-prod-fastlane-02/sub-buzz-2221-1491848430-3.png?downsize=600:*&output-format=auto&output-quality=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/14/asset/buzzfeed-prod-fastlane-01/sub-buzz-13857-1491848582-1.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/10/15/asset/buzzfeed-prod-fastlane-03/sub-buzz-6359-1491850978-7.jpg?downsize=600:*&output-format=auto&output-quality=auto"
    ];

    return dialogues.map((element, index) => {
        return (
            <div
                key={index}
                style={{ marginBottom: 20, border: "1px solid #000", padding: 5 }}
            >
                <img src={element} style={{ width: "100%", maxWidth: "400px" }} />
            </div>
        );
    });
}
import React from "react";

const Head = ({pageTitle}) => {
    return (
        <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="LuaBerry's Portfolio website" />
        <title>{pageTitle} | LuaBerry</title>
        {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
        <script
            src="https://kit.fontawesome.com/d1b3f3e066.js"
            crossOrigin="anonymous"
        ></script>
    </head>
    )
}

export default Head;
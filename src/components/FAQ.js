import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "About unMazer.ai",
            content: `unMazer is a B2B SaaS data intelligence platform that enables key decisions for businesses. Our AI technology creates"Alternative Information Graph" by ingesting signals from multiple sources such as social media, news/articles, locations, transactions and private proprietary data`,
        },
        {
            title: "Top 5 Books",
            content: <p>The Push: A Novel<br/>A Crooked Tree: A Novel<br/>Let Me Tell You What I Mean<br/>The Wife Upstairs: A Novel<br/>Summerwater: A Novel</p>,
        },
        {
            title: "Who are full-stack developers",
            content:
                "A full stack web developer is a person who can develop both client and server software.",
        },
        {
            title: "Who is Abilash S",
            content: `A fresher looking for an internship opportunity within the
            software industry to creatively showcase talents all the while
            challenging me to adapt new skills.`,
        },
        
    ],
};

const styles = {
     bgColor: 'white',
     titleTextColor: 'teal',
     rowTitleColor: 'Black',
     rowContentTextSize: '16px',
     rowContentPaddingTop: '10px',
     rowContentPaddingBottom: '10px',
     rowContentPaddingLeft: '50px',
     arrowColor: "teal",
    rowContentColor: 'black',
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function App (){

    return (
        <div id="faq">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
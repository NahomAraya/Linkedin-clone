import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets_article">
            <div className= "widgets_leftArticle">
                <FiberManualRecordIcon/>
            </div>
            <div className= "widgets_rightArticle"> 
                <h4>{heading}</h4>
                <p>{subtitle}</p>  
            </div>
        </div>);//add onclick to left article which takes it to article online
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkedin latest news</h2>
                <InfoIcon/>
            </div>
            {newsArticle("DETHKLOK RULES", "7th highest GDP in the world")}
            {newsArticle("DO ANYTHING FOR DETHKLOK!", "Album for fish not meant for humans")}
            
        </div>
    );
}

export default Widgets;

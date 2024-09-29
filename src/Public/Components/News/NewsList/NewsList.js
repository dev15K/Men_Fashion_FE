import React, {useEffect, useState} from 'react';
import newsService from '../../Service/NewsService';
import Header from "../../Shared/Client/Header/Header";
import Footer from "../../Shared/Client/Footer/Footer";

function NewsList() {
    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>
    )
}

export default NewsList

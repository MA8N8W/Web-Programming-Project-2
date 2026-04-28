import React from "react";
import Board from "/src/apps/app_chess/components/Board/Board.jsx";
import {Provider} from "react-redux";
import store from "../apps/app_chess/store/store.js";
import "/src/apps/app_chess/index.css";
import openTab from "/public/scripts/tabscript.jsx"

function PageSPA() {
    return (
        <main id="main-content" className="wrapper" tabIndex="-1">
            <div className="tab">
                <button className="tablinks" onClick={() => openTab(event,'TAB1')}>Chess</button>
                <button className="tablinks" onClick={() => openTab(event,'TAB2')}>WIP</button>
            </div>
            <div id="TAB1" className="tabcontent">
                <React.StrictMode>
                    <Provider store={store}>
                        <div className="chess-app">
                            <Board/>
                        </div>
                    </Provider>
                </React.StrictMode>
                <small><a target="_blank" href="https://github.com/simranlotey/react-chess-game">GitHub Page</a></small>
            </div>
            <div id="TAB2" className="tabcontent">
                <p>Test</p>
            </div>
        </main>
    )
}

export default PageSPA
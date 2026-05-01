import React from "react";
import {Provider} from "react-redux";
import Board from "/src/apps/app_chess/components/Board/Board.jsx";
import store from "../apps/app_chess/store/store.js";
import "/src/apps/app_chess/index.css";
import Tetris from "/src/apps/app_tetris/src/components/Tetris.jsx"
import "/src/apps/app_tetris/src/styles/tetris.css";
import "/src/apps/app_tetris/src/index.css";

function PageSPA() {
    return (
        <main id="main-content" className="wrapper" tabIndex="-1">
            <div className="tab">
                <button className="tablinks" onClick={() => openTab(event,'TAB1')}>Chess</button>
                <button className="tablinks" onClick={() => openTab(event,'TAB2')}>Tetris</button>
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
                <React.StrictMode>
                    <div className="app-center-shell">
                        <Tetris />
                    </div>
                </React.StrictMode>
            </div>
        </main>
    )
}

export default PageSPA
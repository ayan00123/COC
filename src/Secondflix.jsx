import React from 'react';
import Lineimg from './bg_games_timeline_bar (1).png';
import Hoglogo from "./bg_timeline_clashofclans.png";

export default function Secondflix() {
    return (
        <div className="flexpart">
            <div className="partone">
                <div>
                    <p className="seconedheading">CONSTANTLY EVOLVING</p>
                    <p className="nxtp">
Clash of Clans has been constantly evolving to offer more user-friendly, consistent and fun online experiences for Supercell gamers. There have been countless updates since the game launched in 2012.</p>
                </div>
                <div className="lineall">
                    <div className="aftline">
                        <li>Global lounch</li>
                        <li>Heroes</li>
                        <li>Clanwars</li>
                        <li>Friendly Wars</li>
                        <li>Builder Base</li>
                        <li>Townhall 12</li>
                    </div>
                    <div className="line"><img src={Lineimg} alt="" /></div>
                    <div className="aftline">
                        <li>2012</li>
                        <li>Today</li>
                    </div>
                </div>
            </div>
            <div className="parttwo">
                <img src={Hoglogo} alt="" />
            </div>
        </div>
    )
}

import React from 'react';
import Emage from './bg_gamewebsite_clashofclans.png';

export default function Flexthree() {
    return (
        <div className="totalflexthree">
             <div className="flixone">
            <div className="one">
                <img src={Emage} alt="" />
            </div>
            <div className="two">
                <span id="allwriting">
                <h1>SEE THE LETEST</h1>
                <h4>To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.</h4>
                </span>
                <span className="allp">
                    <p>Follow us on</p>
                    <a className="allimglink" href=""><img className="allimgess" src="https://cdn.supercell.com/supercell.com/210506082952/all/themes/supercell/img/18/icon_gs_forums.png" alt="" /></a>
                    <a className="allimglink" href=""><img className="allimgess" src="https://cdn.supercell.com/supercell.com/210506082952/all/themes/supercell/img/18/icon_gs_reddit.png" alt="" /></a>
                    <a className="allimglink" href=""><img className="allimgess" src="https://cdn.supercell.com/supercell.com/210506082952/all/themes/supercell/img/18/icon_gs_youtube.png" alt="" /></a>
                    <a className="allimglink" href=""><img className="allimgess" src="https://cdn.supercell.com/supercell.com/210506082952/all/themes/supercell/img/18/icon_gs_facebook.png" alt="" /></a>
                    <a className="allimglink" href=""><img className="allimgess" src="https://cdn.supercell.com/supercell.com/210506082952/all/themes/supercell/img/18/icon_gs_instagram.png" alt="" /></a>
                </span>                
            </div>
        </div>
        </div>
    )
}

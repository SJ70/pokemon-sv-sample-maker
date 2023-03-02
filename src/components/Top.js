import './Top.css'
import {Profile} from './top/Profile.js';
import {Stats} from './top/Stats.js';
import {Moves} from './top/Moves.js';

export function Top(){
    return(
        <div>
            <div className='profileAndStats'>
                <Profile></Profile>
                <Stats></Stats>
            </div>
            <Moves></Moves>
        </div>
    );
}
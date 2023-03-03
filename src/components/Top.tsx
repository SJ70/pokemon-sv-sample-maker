import './Top.css'
import Profile from './top/Profile';
import Stats from './top/Stats';
import Moves from './top/Moves';

const Top = () => {
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

export default Top;
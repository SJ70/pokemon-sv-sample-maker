import './Profile.css'

const Profile = () => {
    return(
        <div className='profile'>
            <input className='sampleName' placeholder='샘플명 입력'></input>
            <img className='pokemon' src={ require('../../database/img/pokemon/000.png')} alt=""></img>
            <div className='nameAndTypes'>
                <p className='name'>포켓몬 이름</p>
                <div className='types'>
                    <img className='type' src={ require('../../database/img/type/0.png')} alt=""></img>
                    <img className='type' src={ require('../../database/img/type/1.png')} alt=""></img>
                    <img className='teraType' src={ require('../../database/img/terastalType/0.png')} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default Profile;
import './Profile.css'

export function Profile(){
    return(
        <div className='profile'>
            <input className='sampleName' placeholder='샘플명 입력'></input>
            <img className='pokemon' src={ require('../../database/pokemon/img/000.png')} alt=""></img>
            <div className='nameAndTypes'>
                <p className='name'>포켓몬 이름</p>
                <div className='types'>
                    <img className='type' src={ require('../../database/type/img/normal.png')} alt=""></img>
                    <img className='type' src={ require('../../database/type/img/fire.png')} alt=""></img>
                    <div className='line'></div>
                    <img className='teraType' src={ require('../../database/terastalType/img/fire.png')} alt=""></img>
                </div>
            </div>
        </div>
    );
}
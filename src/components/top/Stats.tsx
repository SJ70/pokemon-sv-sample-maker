import './Stats.css'

type INature = {
    name: string;
    value: number[];
}
let _Nature: INature = {name: '조심', value: [0,-1,0,1,0,0]};
let _BS: number[] = [100,85,100,135,115,135];
let _IV: string[] = ['V','-','V','V','V','V'];
let _EV: number[] = [252,0,6,252,0,0];
let _Ability: string[] = ["하드론엔진", "등장했을 때 일렉트릭필드를 전개한다. 일렉트릭필드일 때 미래 기관에 의해 특수공격이 강화된다."];
let _Held: string[] = ["생명의 구슬", "지니게 하면 공격할 때마다 HP가 조금씩 줄지만 기술의 위력이 올라간다."];


const Stats = () => {
    return(
        <div className='stats'>

            <p></p>
            <StatCategory name="HP" value={_Nature.value[0]}/>
            <StatCategory name="공격" value={_Nature.value[1]}/>
            <StatCategory name="방어" value={_Nature.value[2]}/>
            <StatCategory name="특수공격" value={_Nature.value[3]}/>
            <StatCategory name="특수방어" value={_Nature.value[4]}/>
            <StatCategory name="스피드" value={_Nature.value[5]}/>

            <ItemName str="종족값"/>
            <BS value={_BS[0]}/>
            <BS value={_BS[1]}/>
            <BS value={_BS[2]}/>
            <BS value={_BS[3]}/>
            <BS value={_BS[4]}/>
            <BS value={_BS[5]}/>

            <ItemName str="개체값"/>
            <IV str={_IV[0]}/>
            <IV str={_IV[1]}/>
            <IV str={_IV[2]}/>
            <IV str={_IV[3]}/>
            <IV str={_IV[4]}/>
            <IV str={_IV[5]}/>

            <ItemName str ="노력치"/>
            <EV value={_EV[0]}/>
            <EV value={_EV[1]}/>
            <EV value={_EV[2]}/>
            <EV value={_EV[3]}/>
            <EV value={_EV[4]}/>
            <EV value={_EV[5]}/>

            <ItemName str="성격"/>
            <ItemValue str={_Nature.name}/>

            <ItemName str="특성"/>
            <ItemValue str={_Ability[0]}/>
            <ItemDesc str={_Ability[1]}/>

            <ItemName str="지닌 물건"/>
            <ItemValue str={_Held[0]}/>
            <ItemDesc str={_Held[1]}/>

        </div>
    );
}

type Category = {
    name : string;
    value: number;
}
type Str = {
    str : string;
}
type Number = {
    value : number;
}

const StatCategory = ({name, value} : Category) => {
    return(
        <div className='statCategory' style={value>0?{color:'var(--red)'}:value<0?{color:'var(--blue)'}:{color:'var(--white)'}}>
            <p>{name}</p>
        </div>
    )
}

const ItemName = ({str} : Str) => {
    return(
        <div className='itemName'>
            <p>{str}</p>
        </div>
    )
}

const BS = ({value} : Number) => {
    return(
        <div className='bs'>
            <p>{value===0?"-":value}</p>
        </div>
    )
}

const IV = ({str} : Str) => {
    return(
        <div className='iv' style={str==="V"?{color:'var(--red)'}:str==="X"?{color:'var(--blue)'}:{color:'var(--white)'}}>
            <p>{str}</p>
        </div>
    )
}

const EV = ({value} : Number) => {
    return(
        // color : #FFFFFF ~ #FF5050
        <div className='ev' style={{color:"hsl(0,100%,"+ (100 - (34.3/252) * value) +"%)"}}>
            <p>{value===0 ? "-" : value}</p>
        </div>
    )
}

const ItemValue = ({str} : Str) => {
    return(
        <div className='itemValue'>
            <p>{str}</p>
        </div>
    )
}

const ItemDesc = ({str} : Str) => {
    return(
        <div className='itemDesc'>
            <p>{str}</p>
        </div>
    )
}

export default Stats;
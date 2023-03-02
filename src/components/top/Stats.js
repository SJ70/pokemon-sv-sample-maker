import './Stats.css'

export function Stats(){
    return(
        <div className='stats'>

            <p></p>
            <StatCategory name="HP" add={0}/>
            <StatCategory name="공격" add={-1}/>
            <StatCategory name="방어" add={0}/>
            <StatCategory name="특수공격" add={1}/>
            <StatCategory name="특수방어" add={0}/>
            <StatCategory name="스피드" add={0}/>

            <ItemName name="종족값"/>
            <BS value={100}/>
            <BS value={85}/>
            <BS value={100}/>
            <BS value={135}/>
            <BS value={115}/>
            <BS value={135}/>

            <ItemName name="개체값"/>
            <IV value='V'/>
            <IV value='-'/>
            <IV value='V'/>
            <IV value='V'/>
            <IV value='V'/>
            <IV value='V'/>

            <ItemName name="노력치"/>
            <EV value={252}/>
            <EV value={0}/>
            <EV value={6}/>
            <EV value={252}/>
            <EV value={0}/>
            <EV value={0}/>

            <ItemName name="성격"/>
            <ItemValue str="조심"/>

            <ItemName name="특성"/>
            <ItemValue str="하드론엔진"/>
            <ItemDesc str="등장했을 때 일렉트릭필드를 전개한다. 일렉트릭필드일 때 미래 기관에 의해 특수공격이 강화된다."/>

            <ItemName name="지닌 물건"/>
            <ItemValue str="생명의 구슬"/>
            <ItemDesc str="지니게 하면 공격할 때마다 HP가 조금씩 줄지만 기술의 위력이 올라간다."/>

        </div>
    );
}

function StatCategory(props){
    return(
        <div className='statCategory' style={props.add>0?{color:'var(--red)'}:props.add<0?{color:'var(--blue)'}:{color:'var(--white)'}}>
            <p>{props.name}</p>
        </div>
    )
}

function ItemName(props){
    return(
        <div className='itemName'>
            <p>{props.name}</p>
        </div>
    )
}

function BS(props){
    return(
        <div className='bs'>
            <p>{props.value}</p>
        </div>
    )
}

function IV(props){
    return(
        <div className='iv' style={props.value==="V"?{color:'var(--red)'}:props.value==="X"?{color:'var(--blue)'}:{color:'var(--white)'}}>
            <p>{props.value}</p>
        </div>
    )
}

function EV(props){
    return(
        // color : #FFFFFF ~ #FF5050
        <div className='ev' style={{color:"hsl(0,100%,"+ (100 - (34.3/252) * props.value) +"%)"}}>
            <p>{props.value===0 ? "-" : props.value}</p>
        </div>
    )
}

function ItemValue(props){
    return(
        <div className='itemValue'>
            <p>{props.str}</p>
        </div>
    )
}

function ItemDesc(props){
    return(
        <div className='itemDesc'>
            <p>{props.str}</p>
        </div>
    )
}
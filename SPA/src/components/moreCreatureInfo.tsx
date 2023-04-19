import { JsxAttribute, convertToObject } from "typescript";
import { /*useFetchCreatureImageQuery, */useFetchSpecificCreatureQuery, RootState } from "../store";
import { useSelector } from "react-redux";
//import Creature from "../classes/creature";

//doenst

function MoreCreatureInfo(){
    const creature = useSelector((state: RootState) => {
        return JSON.parse(state.searchCreature.searchTerm);
    })
    const {data, isFetching } = useFetchSpecificCreatureQuery(creature.creature.index);

    let content: any
    let stall: JSX.Element
    let speed: string | undefined

    if (isFetching) {
        stall = <div>Loading;</div>
    }
    else{
        //console.log(data)
        content = data
        var imageContent = 'https://www.dnd5eapi.co' + content.image
        speed = content.speed.walk + " walking"
        if (content.speed.climb !== undefined){
            speed += ', '+ content.speed.climb + ' climbing'
        }
        if (content.speed.swim !== undefined){
            speed += ', '+ content.speed.swim + ' swimming'
        }
        if (content.speed.fly !== undefined){
            speed += ', '+ content.speed.fly + ' flying'
        }
    }
    function statCalc(num: number){
        if (num % 2 !== 0){
            num--
        }
        let number = (num-10)/2
        if (number<=0){
            return number
        }
        else{
            return `+${number}`
        }
    }
    function getArmor() {
        if (content.armor_class !== undefined){
            return (
                <a>{content.armor_class[0].value} {content.armor_class[0].type}</a>
            )
        }
        else{
            return(
                <a>Getting armor...</a>
            )
        }
    }
    function getSkills() {
        if (content.proficiencies !== undefined){
            if (content.proficiencies.length == 0){
                return (
                    <a>No Skills</a>
                )
            }
            return (
                <div>
                {content.proficiencies.map((skill:any) => (
                    <li>
                        {skill.proficiency.name} +{skill.value}
                    </li>
                ))}
                </div>
            )
        }
        else{
            return(
                <a>Getting skills...</a>
            )
        }
    }
    function getTraits() {
        if (content.proficiencies !== undefined){
            return (
                <div>
                {content.special_abilities.map((trait:any) => (
                    <li>
                        <b>{trait.name}</b>: {trait.desc}
                    </li>
                ))}
                </div>
            )
        }
        else{
            return(
                <a>Getting traits...</a>
            )
        }
    }
    function getActions() {
        if (content.proficiencies !== undefined){
            return (
                <div>
                {content.actions.map((action:any) => (
                    <li>
                        <b>{action.name}</b>: {action.desc}
                    </li>
                ))}
                </div>
            )
        }
        else{
            return(
                <a>Getting actions...</a>
            )
        }
    }
    function getImage() {
        if (content.image !== undefined){
            return (
                <div>
                    <img src={imageContent} alt=""></img>
                </div>
            )
        }
        else{
            return(
                <div>
                    No Image
                </div>
            )
        }
    }
    return (
        <div className="Background">
            <div className="TheBox">
                <div className="CBox">
                        <div className="Leftie">
                            <a className="Name">{content.name} </a> <br></br>
                            <i>{content.size} {content.type}</i>
                        </div>
                        <div className="Fav">
                            <button >Favorite Creature</button>
                        </div>
                </div>
                <div className="CBox">
                        <b>Armor Class:</b> {getArmor()} <br></br>
                        <b>Health Points:</b> {content.hit_points} <br></br>
                        <b>Speed:</b> {speed}
                </div>
                <div className="CBox">
                        <div className="FirstStat">
                            <a>STR</a> <br></br>
                            <a>{content.strength} ({statCalc(content.strength)}) </a>
                        </div>
                        <div className="Stat">
                            <a>DEX</a> <br></br>
                            <a>{content.dexterity} ({statCalc(content.dexterity)}) </a>
                        </div>
                        <div className="Stat">
                            <a>CON</a> <br></br>
                            <a>{content.constitution} ({statCalc(content.constitution)}) </a>
                        </div>
                        <br></br><br></br><br></br>
                </div>
                <div className="InfoScroll">
                    <div className="CBox">
                        <b>Skills:</b> {getSkills()}<br></br>
                        <b>Senses:</b> <br></br>
                        <b>Challenge:</b> {content.challenge_rating}<br></br>
                        <b>Proficiency Bonus:</b> +2
                    </div>
                    <div className="CBox">
                        <b>Traits:</b>{getTraits()}
                        <div className="LB" v-html="traits"></div>
                    </div>
                    <div className="CBoxbottom">
                        <b>Actions:</b>{getActions()}
                        <div className="LB" v-html="actions"></div>
                    </div>
            </div>
        </div>
            <div className="Image">
                {getImage()}
            </div>
        </div>
    );
}
export default MoreCreatureInfo;
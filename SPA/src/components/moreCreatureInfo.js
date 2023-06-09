import { /*useFetchCreatureImageQuery, */useFetchSpecificCreatureQuery, useFetchAllFavCreaturesQuery, useAddPostCreatureQuery } from "../store";
import { useSelector } from "react-redux";
import axios from "axios";

let id = null
let match = false
function MoreCreatureInfo(){
    const creature = useSelector((state) => {
        return state.searchCreature.searchTerm;
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let favList
    allFavCreature()
    sleep(50000)
    function ToggleFav(){
        if (!match){
            FavCreature()
        }
        else{
            DeleteCreature()
        }
    }
    function FavText(){
        if (!match){
            return <a>Toggle Favorite</a>
        }
        else{
            return <a>Unfavorite</a>
        }
    }
    async function FavCreature(){
        const response = await axios.post('http://localhost:3000/creatures', {
            name: content.name,
            index: content.index,
            URL: content.url
          });
        return response.data;
    }
    async function DeleteCreature(){
        const response = await axios.delete(`http://localhost:3000/creatures/${id}`);
        return response.data;
    }
    async function allFavCreature(){
        match = false
        const response = await axios.get('http://localhost:3000/creatures');
        favList = response.data
        id = null
        console.log(favList)
        favList.forEach(element => {
                console.log(content.name, element.name)
                if (element.name == content.name){
                    console.log("HERE")
                    id = element.id
                    match = true
                    console.log(id)
                }
        });
    }
    const {data, isFetching } = useFetchSpecificCreatureQuery(creature.creature.index);

    let content
    if (isFetching) {
        content = <div>Loading;</div>
    }
    else{
        content = data

        var imageContent = 'https://www.dnd5eapi.co' + content.image
        var speed = content.speed.walk + " walking"
        if (content.speed.climb !== undefined){
            speed += ', '+ content.speed.climb + ' climbing'
        }
        if (content.speed.swim !== undefined){
            speed += ', '+ content.speed.swim + ' swimming'
        }
        if (content.speed.fly !== undefined){
            speed += ', '+ content.speed.fly + ' flying'
        }

        //document.getElementById("me").click();
    }
    function statCalc(num){
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
                {content.proficiencies.map(skill => (
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
                {content.special_abilities.map(trait => (
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
                {content.actions.map(action => (
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
                <div >
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
                            <button onClick={ToggleFav}>{FavText()}</button>
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
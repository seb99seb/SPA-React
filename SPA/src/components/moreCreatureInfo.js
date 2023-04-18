import { /*useFetchCreatureImageQuery, */useFetchSpecificCreatureQuery } from "../store";
import { useSelector } from "react-redux";

function MoreCreatureInfo(){
    const creature = useSelector((state) => {
        return state.searchCreature.searchTerm;
    });
    const {data, isFetching } = useFetchSpecificCreatureQuery(creature.creature.index);

    let content
    if (isFetching) {
        content = <div>Loading;</div>
    }
    else{
        //console.log(data)
        content = data
        var imageContent = 'https://www.dnd5eapi.co' + content.image
    }
    function GetImage() {
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
        <div>
            <div className="Info">
                {content.name} <br></br>
                species: {content.type} <br></br>
                size: {content.size} <br></br><br></br>
                {content.hit_points} Hitpoints<br></br><br></br>
                {content.strength} Strength<br></br>
                {content.dexterity} Dextreity<br></br>
                {content.constitution} Constitution<br></br>
                {content.intelligence} Intelligence<br></br>
                {content.wisdom} Wisdom<br></br>
                {content.charisma} Charisma<br></br>
            </div>
            <div className="Image">
                {GetImage()}
            </div>
        </div>
      );
}
export default MoreCreatureInfo;
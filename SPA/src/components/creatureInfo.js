import MoreCreatureInfo from "./moreCreatureInfo";

function CreatureInfo({creature}){
    return (
        <div className="test">
            {creature.name}
        </div>
      );
}

export default CreatureInfo;
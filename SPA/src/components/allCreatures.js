import { useFetchAllCreaturesQuery } from "../store";
import CreatureInfo from "./creatureInfo";

function AllCreatures() {
    const {data, error, isFetching } = useFetchAllCreaturesQuery();

    let content
    if (isFetching) {
        content = <div>Loading;</div>
    }
    else{
        console.log(data.results)
        content = data.results.map((creature) => {
            return <CreatureInfo key={creature.index} creature={creature}></CreatureInfo>
        })
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default AllCreatures;
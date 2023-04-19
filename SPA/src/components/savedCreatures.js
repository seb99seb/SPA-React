import { useFetchAllFavCreaturesQuery } from "../store";
import SearchCreature from "./searchCreature";

function SavedCreatures() {
    const {data, isFetching } = useFetchAllFavCreaturesQuery(null);

    let content
    if (isFetching) {
        content = <div>Loading;</div>
    }
    else{
        console.log(data)
        content = data.map((creature) => {
            return <SearchCreature key={creature.index} creature={creature}></SearchCreature>
        })
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default SavedCreatures;
import { useFetchAllCreaturesQuery } from "../store";
import SearchCreature from "./searchCreature";

function AllCreatures() {
    const {data, isFetching } = useFetchAllCreaturesQuery(null);

    let content
    if (isFetching) {
        content = <div>Loading;</div>
    }
    else{
        //console.log(data.results)
        content = data.results.map((creature:{index: string, name:string, URL: string}) => {
            return <SearchCreature key={creature.index} creature={creature}></SearchCreature>
        })
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default AllCreatures;
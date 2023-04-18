import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
import { useNavigate } from "react-router-dom";

function SearchCreature({creature}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
                 //dette for at undgå at Browseren automatisk prøver et udføre et submit  
                 dispatch(changeSearchTerm({creature}));
                 event.preventDefault(); 
                 navigate("/moreCreatureInfo");
  }
  
  return (
    <div className="Creatures" onClick={handleClick}>
        {creature.name}
    </div>
);
}

export default SearchCreature;

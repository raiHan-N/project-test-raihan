import BottomCard from "./BottomCard";
import CardItem from "./CardItem";
import UpperCard from "./UpperCard";

const CardWrapper = ({data,page}) => {

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <UpperCard page={page}/>
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        { data.map(e => (
          <CardItem key={e.id} image={e.id} title={e.title} body={e.body}/>
        ))
        }
      </div>
    </div>
        <BottomCard page={page}/>
    </div>
  )
}



export default CardWrapper;


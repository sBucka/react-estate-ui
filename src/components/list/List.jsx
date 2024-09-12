import './list.scss'
import Card from "../card/Card"
import { listData } from "../../lib/dummyData";


function List(){
  return (
    <div className='list'>
        { listData.map(item=>{
            return <Card key={item.id} item={item}></Card>
            
        }) }
    </div>
  )
}

export default List
import { Student } from "./StudentInterFace";
interface Item extends Student  {
  id: number;
}

interface DisplayDataItem<T> {
  items: Array<T>
}

export const DisplayData = <T extends Item>({ items }: DisplayDataItem<T>) => {
  return (
    <>
      <ul>
        {items.map((item) => (
           <div className="cards">
                <div className="card">
                    <p> {'Id no: '}{item.id} {'Name:'} {item.name} {', '}{item.surname} </p>
                    <div>
                        <p>{'Level:'}{item.level}</p>
                        </div> 
                </div>
            </div>
            
        ))}
      </ul>
    </>
  )
}
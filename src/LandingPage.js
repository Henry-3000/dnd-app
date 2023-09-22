import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const myImg = [
  {
      id:"1",
      name:"Saad",
      thumb: "img/saad.jpg"
  },
  {
      id:"2",
      name:"Erol",
      thumb: "img/erol.jpg"
  },
  {
      id:"3",
      name:"Fer",
      thumb: "img/fer.jpg"
  },
  {
      id:"4",
      name:"Andrew",
      thumb: "img/tirza.jpg"
  }
]

function LandingPage() {
    const [characters, updateCharacters] = useState(myImg);

   const  handleOnDragEnd = (result) => {
    if(!result.destination) return;
      console.log(result)
        const items = [...characters];
        let [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }


    return (
        <div className="container">
            <h2 style={{textAlign:"center", marginBottom:"50px"}}>Image Gallery</h2>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <div className="row" style={{border:"1px solid", margin:"0"}}>
                    <Droppable droppableId="character" direction='horizontal'>
                        {(provided) =>(
                                <ul className="characters"  {...provided.droppableProps} ref={provided.innerRef} style={{listStyle:"none"}}>
                                    {characters.map((chary, i) => {
                                        return(
                                            <Draggable key={chary.id} draggableId={chary.id} index={i}>
                                            {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <div className="col-sm-3">
                                                            <div className="thumbnail">
                                                                <img src={chary.thumb} alt={`${chary.name} Thumb`}/>
                                                            </div>
                                                        </div>
                                                    </li>
                                            )}
                                            </Draggable>
                                        )}
                                    )}
                                    {provided.placeholder}
                                </ul>
                        )}
                    </Droppable>
                    </div>
                </DragDropContext>
            </div>
    )
}


export default LandingPage;

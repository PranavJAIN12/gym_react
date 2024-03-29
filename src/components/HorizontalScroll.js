import React, {useContext} from "react";
import BodyPart from "./BodyPart/BodyPart";
import LeftArrowIcon from '../Assets/left-arrow.png'
import RightArrowIcon from '../Assets/right-arrow.png'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export default function HorizontalScroll({ data, bodyPart, setBodyPart }) {

  

  return (
    <ScrollMenu>
      <section id="horizontalScroll" style={{width:'100%', height:'2rem', display: 'flex', flexWrap: 'wrap', justifyContent:'center'}} >
        {data.map((item) => (
          <div key={item.id} itemID={item.id} title={item.id}>
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </div>
        ))}
      </section>
      </ScrollMenu>
    
  );
}

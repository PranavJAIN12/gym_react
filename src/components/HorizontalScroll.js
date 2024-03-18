import React from "react";

export default function HorizontalScroll({ data }) {
  return (
    <section id="horizontalScroll">
      {data.map((item) => (
        <div 
        key={item.id}
        itemID={item.id}
        title={item.id}>
        {item}
        
        </div>
      ))}
    </section>
  );
}

import React, { useEffect } from 'react';
import $ from 'jquery';
import s from './contents-list.module.scss';

var checkScrollSpeed = (function(settings){
  settings = settings || {};

  var lastPos, newPos, timer, delta, 
      delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function(){
    newPos = window.scrollY;
    if ( lastPos != null ){ // && newPos < maxScroll 
      delta = newPos -  lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
})();

const ContentsList = ({ items, activeCharacter, handleCLick, pageWidth, sectionChanged, setSectionChanged }) => {
  function renderItems() {

    if (items) {
      return items.map((item) => {
        const activeClass = activeCharacter === item.id ? s.item__active : '';
        
        return (
          <li
            key={item.name}
            id={item.name}
            onClick={() => handleCLick(item.name)}
            className={`${s.item} ${activeClass}`}>{item.name}</li>
        );
      });
    }
  }

  useEffect(() => {
      items.map((item, key) => {
          if (activeCharacter === item.id && sectionChanged) {
              const itemOffset = document.getElementById(item.name).offsetLeft;
              const totalOffset = itemOffset - pageWidth / 2 + document.getElementById(item.name).clientWidth / 2;

              // document.getElementById('teeeestowa').scrollLeft = itemOffset;
              // $("#about_contents_nav").animate({ scrollLeft: totalOffset }, 50);
              // $("#about_contents_nav").animate({ scrollLeft: totalOffset }, 50);
              $("#about_contents_nav").scrollLeft(totalOffset);

              // window.onscroll = function(){
              //   console.log( checkScrollSpeed() );
              // };

              setSectionChanged(false);
              // document.getElementById('teeeestowa').scroll({
              //     left: itemOffset,
              //     behavior: 'smooth'
              // })
          }
      })
  });

  return (
    <ul className={s.list} id="about_contents_nav">
        {renderItems()}
    </ul>
  );
}

export default ContentsList;
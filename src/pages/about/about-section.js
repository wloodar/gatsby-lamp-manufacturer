import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from "../../components"

const AboutSection = ({
  data,
  scrollTo,
  backTo,
  setNavigateToAboutSection,
  activeCharacter,
  setActiveCharacter,
  setSectionChanged,
  pageHeight = 100,
  refs,
}) => {
  const observerMargin = Math.floor(pageHeight / 2);

  useEffect(() => {
    const observerConfig = {
      rootMargin: `-${
        pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
      }px 0px -${observerMargin}px 0px`,
    };
    const handleIntersection = function(entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeCharacter && entry.isIntersecting) {
          setActiveCharacter(entry.target.id);
          setSectionChanged(true);
        }
      });

      if (data.name === scrollTo && refs[data.name].current !== null && scrollTo !== null) {
          // const pos = refs[data.name].current.style.position;
          // const top = refs[data.name].current.style.top;
          // refs[data.name].current.style.position = 'relative';
          // refs[data.name].current.style.top = - (pageHeight / 5) + "px";
          // refs[data.name].current.scrollIntoView({behavior: 'smooth', block: 'start'});
          // refs[data.name].current.style.top = top;
          // refs[data.name].current.style.position = pos;

          // console.log($(refs[data.name].current).offset().top + (pageHeight / 5));
          $("html, body").animate({ scrollTop: ($(refs[data.name].current).offset().top - 140) }, 400);

          setNavigateToAboutSection("1");
      }
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(refs[data.name].current);
    return () => { observer.disconnect(); } // Clenaup the observer if component unmount.
  }, [
    activeCharacter,
    setActiveCharacter,
    scrollTo,
    backTo,
    setNavigateToAboutSection,
    observerMargin,
    refs,
    data,
    pageHeight,
  ]);

  return (
    <div>
        {data && refs ?
          <div
          ref={refs ? refs[data.name] : null}
          id={data ? data.id : null}
      >
          {data.content}
          {backTo !== null && backTo.section === data.name ? <Link url={`/lampa/${backTo.path}`} title={backTo.name} className="action" style={{ color: "#fff", display: 'block', marginTop: '2.4rem', lineHeight: '1.7' }}>
              Wróć do - {backTo.name}
          </Link> : null }
      </div>
        : null}
    </div>
  );
}

export default AboutSection;
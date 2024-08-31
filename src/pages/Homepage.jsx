import React from 'react';
import Navbar from '../components/Navbar';
import RedirectCard from '../components/RedirectCard';
import { faCircleQuestion,faSpellCheck } from '@fortawesome/free-solid-svg-icons'; 

function Homepage() {
  const values = [
    { name: "QUIZ", path: "/quiz", icon: faCircleQuestion}, 
    { name: "CROSSWORD", path: "/quiz", icon:faSpellCheck  },
    { name: "SNVI", path: "/quiz",icon:faSpellCheck },
    { name: "SCRAMBLE", path: "/scramble" }
  ];

  return (
    <div className="bg-[url('/img/5413332.jpg')] h-screen bg-center font-medium text-xl">
      <Navbar />
      <div className="h-[84vh] my-2 flex flex-wrap justify-center gap-8 items-center p-10">
        {values.map((item, i) => (
          <RedirectCard key={i} name={item.name} path={item.path} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;

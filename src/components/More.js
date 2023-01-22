import React, { useEffect, useState } from 'react'


const More = () => {
  const [userName, getUserName] = useState("");

  useEffect(() => {
    getUserName(localStorage.getItem("userName"));
    console.log(userName);
  });

  return (
    <div className="container mt-">
      <h1 className="display-4 text-primary text-center">{userName}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis
        aut illum laborum quidem in officia sed ab consectetur, vitae inventore
        ratione eius voluptate earum quis illo provident labore dicta officiis?
        Eveniet placeat consectetur nemo asperiores? Quae expedita rem obcaecati
        deleniti delectus facere, quod, atque rerum illum, veritatis modi.
        Ullam?
      </p>
    </div>
  );
};



export default More;

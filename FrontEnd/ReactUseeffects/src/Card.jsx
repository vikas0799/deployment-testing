import React, { useEffect, useState } from "react";

function Card() {
  const [profile, setName] = useState({
    name: "",
    followers: 0,
    location: "",
    imgurl: "",
  });
  useEffect(() => {
    fetch("https://api.github.com/users/vikas0799")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setName({
          name: data.name,
          followers: data.followers,
          location: data.location,
          imgurl: data.avatar_url,
        });
      }, []);
  });

  return (
    <>
      <h1>welcome github Profile viewrs</h1>
      <div style={{border:"5px solid red",backgroundColor:"#DAF7A6"}}>
        <h1>{profile.name}</h1>
        <h1>{profile.followers}</h1>
        <h1>{profile.location}</h1>
        <img src={profile.imgurl} alt="" />
      </div>
      
    </>
  );
}

export default Card;

import React from "react";
import "./stories.scss"; // Import your CSS file here

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Vikas Agrawal",
      img: "https://github.com/vikas22634/Societal/assets/75554973/32f37534-7ad3-46fe-bfd2-306a22e013e9",
    },
    {
      id: 2,
      name: "Jennifer",
      img: "https://images.pexels.com/photos/12617769/pexels-photo-12617769.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Aashutosh Agrawal",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Mohit Gupta",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <div className="stories-container">
      {stories.map((story) => (
        <div key={story.id} className="story-card">
          <div className="">
            <img
              title={story.name}
              className="cursor-pointer h-20 w-20 object-cover rounded-full"
              src={story.img}
              alt={story.name}
            />
            <p className="text-xs cursor-pointer font-medium dark:text-dark-txt-color text-txt-color text-center">
              {story.name}
            </p>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Stories;

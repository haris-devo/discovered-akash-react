import PosterCard from "./PosterCard";

const NewPosters = () => {
  // give me randow array
  const projectData = [
    {
      imageUrl: "https://example.com/image1.jpg",
      title: "Project 1",
      price: 10.99,
      discount: 0.2,
      rating: 4.5,
    },
    {
      imageUrl: "https://example.com/image2.jpg",
      title: "Project 2",
      price: 15.99,
      discount: 0.1,
      rating: 4.2,
    },
    {
      imageUrl: "https://example.com/image3.jpg",
      title: "Project 3",
      price: 20.99,
      discount: 0.3,
      rating: 4.8,
    },
  ];

  return (
    <div>
      <h1>New Posters</h1>
      <div>
        {projectData.map(() => {
          return (
            <PosterCard
              key={
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15)
              }
              imageUrl={projectData.imageUrl}
              title={projectData.title}
              price={projectData.price}
              discount={projectData.discount}
              rating={projectData.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewPosters;

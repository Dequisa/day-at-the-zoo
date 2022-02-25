function Main({ key, name, location, img }) {
  return (
    <div className="Main">
      <img src={img} alt="zoo animal" />
      <h3>{name}</h3>
      <h3>{location}</h3>
    </div>
  );
}

export default Main;

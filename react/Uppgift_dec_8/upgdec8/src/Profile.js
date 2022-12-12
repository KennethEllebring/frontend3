import profileImg from "./data/kennethprofile.jpg";
const profile = () => {
  return (
    <div className="profile">
      <img src={profileImg} alt="profile_picture"></img>
      <h2 className="profile-header">Kenneth Ellebring</h2>
      <p className="profile-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero culpa eaque accusantium et quae incidunt doloribus </p>
    </div>
  );
};

export default profile;

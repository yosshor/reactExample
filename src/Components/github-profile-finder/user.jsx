export default function User({ user }) {
  if (user.message) {
    return <div>Not Found</div>;
  }
  return (
    <div className="user">
      <div className="avatar">
        <a href={user.html_url}>
          {" "}
          <img
            style={{ width: "100px" }}
            src={user.avatar_url}
            alt="github user avatar"
          />
          {/* <br></br>
          {`${user.name || user.login} Profile Page`} */}
        </a>
      </div>
      <div className="">
        <h4>Name : {user.name || user.login ? user.name || user.login : "Unknown"}</h4>
        
      </div>
      <div className="profile-info ">
        <h4>User Joined : {user.created_at}</h4>
        <h4>Location : {user.location ? user.location : "Unknown"}</h4>
        <h4>
          Public Repo : {user.public_repos ? user.public_repos : "Unknown"}
        </h4>
        <h4>Followers : {user.followers ? user.followers : "Unknown"}</h4>
        <h4>Following : {user.following ? user.following : "Unknown"}</h4>
      </div>
    </div>
  );
}

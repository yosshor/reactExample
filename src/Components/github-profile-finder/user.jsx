export default function User({ user }) {
  if (user.message) {
    return <div>Not Found</div>;
  }
  const created_on = new Date(user.created_at);
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
        <h4>
          Name : {user.name || user.login ? user.name || user.login : "Unknown"}
        </h4>
      </div>
      <div className="profile-info ">
        <h4>
          User Joined : {created_on.getDate()}{" "}
          {created_on.toLocaleString("en-us", { month: "short" })}{" "}
          {created_on.getFullYear()}{" "}
        </h4>
        <h4>Location : {user.location ? user.location : "Unknown"}</h4>
        <h4>
          Public Repo : {user.public_repos ? user.public_repos : "Unknown"}
        </h4>
        <h4>
          Followers : {user.followers !== null ? user.followers : "Unknown"}
        </h4>
        <h4>
          Following : {user.following !== null ? user.following : "Unknown"}
        </h4>
      </div>
    </div>
  );
}

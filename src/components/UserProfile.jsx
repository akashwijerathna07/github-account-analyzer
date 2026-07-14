function UserProfile({ user }){

    const joinedDate = new Date(user.created_at);

    return(
        <div className="main-container">
            <div className="username">
                <p>{user.login}</p>
            </div>

            <div className="user-profile-stats">
                <div className="user-avatar">
                    <img src={user.avatar_url} alt="github user avatar" />
                </div>

                <div className="user-stats">
                    <div className="repos">
                        <p className="stat-reading">{user.public_repos}</p>
                        <p>Repos</p>
                    </div>

                    <div className="followers">
                        <p className="stat-reading">{user.followers}</p>
                        <p>Followers</p>
                    </div>

                    <div className="following">
                        <p className="stat-reading">{user.following}</p>
                        <p>Following</p>
                    </div>
                </div>
            </div>

            <div className="user-details">
                <p>{user.name}</p>
                <p>{user.location}</p>
                <p>{user.bio}</p>
                <p>
                    Joined {joinedDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric"
                    })}
                </p>
            </div>
        </div>
    )

}

export default UserProfile;
import formatNumber from "../utils/formatNumber";

function UserProfile({ user }){

    const joinedDate = new Date(user.created_at);

    return(
       
        <div className="profile-wrapper">
            <div className="profile-container">
                <div className="username">
                    <p>{user.login} ~ <a href={user.html_url} target="_blank">{`github.com/${user.login}`}</a></p>    
                </div>

                <div className="profile-section">
                    <div className="user-profile-stats">
                        <div className="user-avatar">
                            <img src={user.avatar_url} alt="github user avatar" />
                        </div>

                        <div className="user-stats">
                            <div className="repos">
                                <p className="stat-reading">{formatNumber(user.public_repos)}</p>
                                <p>Repos</p>
                            </div>

                            <div className="followers">
                                <p className="stat-reading">{formatNumber(user.followers)}</p>
                                <p>Followers</p>
                            </div>

                            <div className="following">
                                <p className="stat-reading">{formatNumber(user.following)}</p>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>

                    <div className="user-details">
                        <p style={{ fontWeight: '500'}}>{user.name}</p>
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
            </div>
        </div>
        
    )

}

export default UserProfile;



//  <div className="profile-wrapper">
//             <div className="profile-header-container">
//                 <div className="username">
//                     <p>{user.login}</p>
//                 </div>

//                 <div className="user-profile-stats">
                    // <div className="user-avatar">
                    //     <img src={user.avatar_url} alt="github user avatar" />
                    // </div>

                    // <div className="user-stats">
                    //     <div className="repos">
                    //         <p className="stat-reading">{formatNumber(user.public_repos)}</p>
                    //         <p>Repos</p>
                    //     </div>

                    //     <div className="followers">
                    //         <p className="stat-reading">{formatNumber(user.followers)}</p>
                    //         <p>Followers</p>
                    //     </div>

                    //     <div className="following">
                    //         <p className="stat-reading">{formatNumber(user.following)}</p>
                    //         <p>Following</p>
                    //     </div>
                    // </div>
//                 </div>
//             </div>

//             <div className="user-details">
                // <p style={{ fontWeight: '500'}}>{user.name}</p>
                // <p>{user.location}</p>
                // <p>{user.bio}</p>
                // <p>
                //     Joined {joinedDate.toLocaleDateString("en-US", {
                //         month: "short",
                //         day: "numeric"
                //     })}
                // </p>
//             </div>
//         </div>
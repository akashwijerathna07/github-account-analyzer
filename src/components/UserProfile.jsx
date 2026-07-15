import formatNumber from "../utils/formatNumber";

function UserProfile({ user, repos }){

    const joinedDate = new Date(user.created_at);
    

    const totalStars = repos.reduce(
        (total, repo) => total + repo.stargazers_count,
        0
    ); 

    const totalForks = repos.reduce(
        (total, repo) => total + repo.forks_count,
        0
    );

    const mostStarredRepo = repos.length > 0
    ? repos.reduce(
        (max, repo) =>
            (repo.stargazers_count || 0) > (max.stargazers_count || 0)
                ? repo
                : max
      )
    : null;

    const mostUsedLanguage = repos.length > 0 
        ? (() => {
            const languageCount = {};

            repos.forEach((repo) => {
                if(repo.language){
                    languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
                }
            });

            return Object.keys(languageCount).reduce(
                (max, language) => languageCount[language] > language[max]
                                        ? language
                                        : max
            );
        })() : null;

    const latestRepo = repos.length > 0
        ? [...repos].sort(
            (a, b) =>
                new Date(b.updated_at) - new Date(a.updated_at)
        )[0]
        : null;

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

                
                <p className="repo-heading">
                    Repository Analysis
                </p>

                <div className="repo-first-section">
                    <div className="repo-stat">
                        <p className="repo-value">{formatNumber(totalStars)}</p>
                        <p>Total Stars</p>
                    </div>

                    <div className="repo-stat">
                        <p className="repo-value">{formatNumber(totalForks)}</p>
                        <p>Total Forks</p>
                    </div>
                </div>

                {mostStarredRepo && (
                    <div className="top-repository">
                        <p className="repo-section-title">
                            Most Starred Repository <span>:</span>
                        </p>

                        <p className="repository-name">
                            {mostStarredRepo.name}  ~  {formatNumber(mostStarredRepo.stargazers_count)} Stars
                        </p>
                    </div>
                )}

                {mostUsedLanguage && (
                    <div className="most-used-language">

                        <p className="lang-section-title">
                            Most Used Language <span>:</span>
                        </p>

                        <p className="language-name">
                            {mostUsedLanguage}
                        </p>

                    </div>
                )}

                {latestRepo && (
                    <div className="recent-repository">

                        <p className="recent-repo-name">
                            Recently Updated <span>:</span>
                        </p>

                         <p className="repository-name-date">
                            {latestRepo.name} ~ {new Date(latestRepo.updated_at).toLocaleDateString(
                                "en-US",
                                {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                }
                            )}
                        </p>

                    </div>
                )}


            </div>
        </div>
        
    )

}

export default UserProfile;



function UserProfile({ user }){

    return(
        <div className="main-container">
            <div className="username">
                <p>{user.login}</p>
            </div>
        </div>
    )

}

export default UserProfile;
import React, { useContext } from 'react';
import UserContext from '../UserContext';

const HomePage = () => {
    const userContext = useContext(UserContext);

    return (
        <div className="content">
            <h3>About me</h3>
            <table className="github-table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Website</th>
                        <th>Followers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={userContext.githubData.avatar_url} alt="avatar" />
                        </td>
                        <td>{userContext.githubData.githubData.name}</td>
                        <td>{userContext.location}</td>
                        <td>
                            <a href={userContext.githubData.blog}>{userContext.githubData.blog}</a>
                        </td>
                        <td>{userContext.githubData.followers}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HomePage;
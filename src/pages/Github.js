import React, { useContext } from 'react';
import UserContext from '../UserContext';

const HomePage = () => {
    const userContext = useContext(UserContext);

    return (
        <div className="content">
            <h3>About you</h3>
            <table className="github-table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Followers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={userContext.githubData.avatar_url} alt="avatar" />
                        </td>
                        <td>{userContext.githubData.name}</td>
                        <td>{userContext.githubData.location}</td>
                        <td>{userContext.githubData.followers}</td>
                    </tr>
                </tbody>
            </table>
            <div className="section">
                <ul>
                    <li><b>Website: </b><a href={userContext.githubData.blog}>{userContext.githubData.blog}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;
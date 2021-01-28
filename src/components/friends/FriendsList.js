import React from 'react'
import {Link} from 'react-router-dom';
import CardLayout from '../layout/CardLayout';
import LoadingIcon  from '../loading/LoadingIcon';

const FriendsList = ({ friendsList }) => {

    const listItems = () => {
        const list = friendsList.map((friend) =>
            <React.Fragment key={friend.userid}>
            <Link to={{pathname:`friends/${friend.userid}`, aboutProps:friend.username}}>
                <li>
                    {friend.username}
                </li>
            </Link>
            </React.Fragment>
        )
        return (<ul>{list}</ul>);
    }

    return (
        <div>
            {!friendsList ? <LoadingIcon/> : <CardLayout title={<h1>Friends</h1>} body={listItems()}/>}
        </div>
    )
}

export default FriendsList

import React from 'react';
import UserCard from './UserCard';
import './UsersList.css';

function UsersList({ users, showEditModal, showDeleteConfirmation }) {
	return (
		<div className="users__list">
			{users.map((user) => (
				<UserCard
					key={user.id}
					user={user}
					showEditModal={showEditModal}
					showDeleteConfirmation={showDeleteConfirmation}
				/>
			))}

			{users.length === 0 && <h2>No users found</h2>}
		</div>
	);
}

export default UsersList;

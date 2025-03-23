import React from 'react';
import UserCard from './UserCard';

function UsersList({ users, showEditModal, showDeleteConfirmation }) {
	return (
		<div>
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

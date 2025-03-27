import { IoTrashOutline } from 'react-icons/io5';
import { PiPencilLineDuotone } from 'react-icons/pi';
import './UserCard.css';

function UserCard({ user, showEditModal, showDeleteConfirmation }) {
	return (
		<div className="user__card">
			<div className="user__info">
				<h2 className="user__name">
					{user.first_name} {user.last_name}
				</h2>
				<p className="user__email">{user.email}</p>
				<p className="user__birthday">{user.birthday.split('T')[0]}</p>
				<img
					className="user__image"
					src={user.image_url}
					alt={user.first_name}
					width={85}
					height={85}
				/>
			</div>
			<br />
			<div className="user__actions">
				<button onClick={() => showEditModal(user)} aria-label="Edit">
					<PiPencilLineDuotone className="edit-icon" />
				</button>
				<button
					onClick={() => showDeleteConfirmation(user)}
					aria-label="Delete"
				>
					<IoTrashOutline className="trash-icon" />
				</button>
			</div>
		</div>
	);
}

export default UserCard;

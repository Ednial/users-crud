import { IoTrashOutline } from 'react-icons/io5';
import { PiPencilLineDuotone } from 'react-icons/pi';
import './UserCard.css';

function UserCard({ user, showEditModal, showDeleteConfirmation }) {
	return (
		<div>
			<h2>
				{user.first_name} {user.last_name}
			</h2>
			<p>{user.email}</p>
			<p>{user.birthday.split('T')[0]}</p>
			<img src={user.image_url} alt={user.first_name} width={85} height={85} />
			<br />
			<div>
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

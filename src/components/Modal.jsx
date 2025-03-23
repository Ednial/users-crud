import './Modal.css';

function Modal({ openModal, closeModal, title = null, children }) {
	// const closeModal = () => {
	// 	setOpen(false);
	// };

	return (
		<div
			className={`modal ${openModal ? 'show-modal' : ''}`}
			onClick={closeModal}
		>
			{/* <div className="modal-overlay" onClick={closeModal} /> */}
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{title && (
					<div className="modal-header">
						<h2 className="modal-title">{title}</h2>
						{/* <button onClick={closeModal}>close</button> */}
					</div>
				)}
				<div className="modal-body">{children}</div>
			</div>
		</div>
	);
}

export default Modal;

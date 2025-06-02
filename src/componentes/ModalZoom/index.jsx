const ModalZoom = ({ foto }) => {
	return (
		<>
			<dialog open={!!foto}>
				<p></p>
				<form method="dialog">
					<button>Okay</button>
				</form>
			</dialog>
		</>
	);
};

export default ModalZoom;

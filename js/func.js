function getCol (clicked) {
	return $(clicked).closest('td').index()
}

function getRow (clicked) {
	return $(clicked).closest('tr').index();
}
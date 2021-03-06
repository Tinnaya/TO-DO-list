function addTask(id, task) {
	const $btnEdit = $('<button>')
	.addClass('btn btn-warning btn-xs pull-right btn-edit')
	.html('<i class=glyphicon glyphicon-pencil></i>')
	// для делете
	const $btnDelete = $('<button>')
		.addClass('btn btn-danger btn-xs pull-right btn-delete')
		.html('<i class=glyphicon glyphicon-trash></i>');

	const $taskItem = $('<li>')
	.addClass('list-group-item')
	.text(task.title)
	.attr('data-id', id)
	// для делете
	.append($btnDelete)
	// для эдит
	.attr('data-id', id)
	.append($btnEdit);

	$tasksList
		.find(`[data-status="${task.status}"]`)
		.append($taskItem);
}
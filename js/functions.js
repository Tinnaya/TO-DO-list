function addTask(id, task) {
	const $btnEdit = $('<button>')
	.addClass('btn btn-warning btn-xs pull-right btn-edit')
	.html('<i class="glyphicon glyphicon-pencil"></i>')
	// для делете
	const $btnDelete = $('<button>')
		.addClass('btn btn-danger btn-xs pull-right btn-delete')
		.html('<i class="glyphicon glyphicon-trash"></i>');

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
//счетчики
function counter() {
	var $toDoCount = 0;
	var $inProgressCount = 0;
	var $doneCount = 0;

	for (let key in localStorage) {
		if (!localStorage.hasOwnProperty(key)) continue;

		const task = JSON.parse(localStorage[key]);

		switch (`${task.status}`) {
			case '1':
				$toDoCount += 1;
				$count.find(`[data-count="${task.status}"]`).text(`${$toDoCount}`);
				break;
			case '2':
				$inProgressCount += 1;
				$count.find(`[data-count="${task.status}"]`).text($inProgressCount);
				break;
			case '3':
				$doneCount += 1;
				$count.find(`[data-count="${task.status}"]`).text($doneCount);
				break;
			default:
				break;
		};
	}
}
function addTask(id, task) {
	const $taskItem = $('<li>').addClass('list-group-item').text(task.title);

	$tasksList
		.find(`[data-status="${task.status}"]`)
		.append($taskItem);
		
}
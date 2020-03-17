const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');
const $formEditTask = $('#formEditTask');
const $modalEditTask = $('#modalEditTask');
const $count = $('.panel-body');

$formAddTask.on('submit', function(event){
	event.preventDefault();


	let task = {
		id:  new Date().getTime(),
		title:$('[name = "title"]',this).val(),
		status: 1 //1-todo, 2-in progress, 3 - done
	};

	addTask(task.id, task);
	localStorage.setItem(task.id, JSON.stringify(task));
	counter();
	$modalAddTask.modal('hide');

	this.reset();
});

for (let key in localStorage) {
	if(!localStorage.hasOwnProperty(key)) continue;
	const task = JSON.parse(localStorage[key]);
	addTask(task.id, task);
}

counter();

// для делете
$('body').on('click', '.btn-delete', function (event) {
	const $parent = $(this).parents('[data-id]');
	const taskId = $parent.data('id');
	$parent.remove();
	localStorage.removeItem(taskId);
	counter();
});

$formEditTask.on('submit', function(event) {
	event.preventDefault();
	let task = {
		title:$('[name = "title"]',this).val(),
		status: $('[name = "status"]',this).val(),
		id: $('[name = "id"]',this).val()
	}
	$tasksList.find(`[data-id="${task.id}"]`).remove();
	addTask(task.id, task);

	$modalEditTask.modal('hide');
	localStorage.setItem(task.id, JSON.stringify(task));
	counter();
});

// для эдит
$('body').on('click', '.btn-edit', function (event) {
		const $parent = $(this).parents('[data-id]');
		const taskId = $parent.data('id');
		const task = JSON.parse(localStorage.getItem(taskId));

		for(let key in task){
			$formEditTask.find(`[name="${key}"]`).val(task[key]);
		}
		$modalEditTask.modal('show');
});

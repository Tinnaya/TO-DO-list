const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');
$formAddTask.on('submit', function(event){
	event.preventDefault();

	
	// console.log($('[name = "title"]',this).val());

	let task = {
		id:  new Date().getTime(),
		title:$('[name = "title"]',this).val(),
		status: 1 //1-todo, 2-in progress, 3 - done
	};

		addTask(task.id, task);
		localStorage.setItem(task.id, JSON.stringify(task));
	$modalAddTask.modal('hide'); 

	this.reset();
});

for (let key in localStorage) {
	
	if(!localStorage.hasOwnProperty(key)) continue;
	console.log(key);
	const task = JSON.parse(localStorage[key]);
	addTask(task.id, task);
}
// для делете
// $('body').on('click', '.btn-delete', function (event) {
// 	const $parent = $(this).parents('[data-id]');
// 	const taskId = $parent.data('id');
// 	$parent.remove();
// 	localStorage.removeItem(taskId);
// });

// для эдит
$('body').on('click', '.btn-edit', function (event) {
		const $parent = $(this).parents('[data-id]');
		const taskId = $parent.data('id');
		// $parent.remove();
		// localStorage.removeItem(taskId);
		console.log(taskId);
	});
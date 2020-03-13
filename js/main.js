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

for (const key in localStorage) {
	
	if(!localStorage.hasOwnProperty(key)) continue;
	console.log(key);
	const task = JSON.parse(localStorage[key]);
	addTask(task.id, task);
}
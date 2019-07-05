// var button = $('button');

// var input = $('input');

// button.click(function(){
//   var task = $('<div>' + input.val() +  '</div>');
//   $('body').append(task);
// });
$("div").css("border", "1px solid red");

var defaults = {
  // селекторы и атрибуты JavaScript, которые будут использованы в функциях
  todoTask: "todo-task",
  todoHeader: "task-header",
  todoDate: "task-date",
  todoDescription: "task-description",
  taskId: "task-",
  formId: "todo-form",
  dataAttribute: "data",
  deleteDiv: "delete-div"
}, codes = {
  "1" : "#pending", // Для запланированных задач
  "2" : "#inProgress",
  "3" : "#completed"
};
// Создаем задачу
var generateElement = function(params) {
  var parent = $(codes[params.code]),
      wrapper;

  if (!parent) {
    return;
  }

  wrapper = $("<div />", {
    "class" : defaults.todoTask,
    "id" : defaults.taskId + params.id,
    "data" : params.id
  }).appendTo(parent);

  $("<div />", {
    "class" : defaults.todoHeader,
    "text": params.title
  }).appendTo(wrapper);

  $("<div />", {
    "class" : defaults.todoDate,
    "text": params.date
  }).appendTo(wrapper);

  $("<div />", {
    "class" : defaults.todoDescription,
    "text": params.description
  }).appendTo(wrapper);
};
generateElement({
  id: "123",
  code: "1",
  title: "My Uber Important Task",
  date: "5/2/2014",
  description: "I have to do a lot of steps to implement this task!"
});
var removeElement = function(params) {
  $("#" + defaults.taskId + params.id).remove();
};

localStorage.setItem("todoData", JSON.stringify(data));
var addItem = function() {
  var inputs = $("#" + defaults.formId + " :input"),
      errorMessage = "Title can not be empty",
      id, title, description, date, tempData;

  if (inputs.length !== 4) {
    return;
  }

  title = inputs[0].value;
  description = inputs[1].value;
  date = inputs[2].value;

  if (!title) {
    generateDialog(errorMessage);
    return;
  }

  id = new Date().getTime();

  tempData = {
    id : id,
    code: "1",
    title: title,
    date: date,
    description: description
  };

  // Созраняем элемент в локальном хранилище
  data[id] = tempData;
  localStorage.setItem("todoData", JSON.stringify(data));

  // Создаем задачу
  generateElement(tempData);

  // Очищаем форму
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
};
$("." + defaults.todoTask).draggable();

// Добавляем Задачу
var generateElement = function(params) {
  wrapper.draggable({
    start: function() {
      $("#" + defaults.deleteDiv).show();
    },
    stop: function() {
      $("#" + defaults.deleteDiv).hide();
    }
  });

// Добавляем обработчик отпускания перетаскиваемой задачи для всех категорий
$.each(codes, function(index, value) {
  $(value).droppable({
    drop: function(event, ui) {
      var element = ui.helper,
          css_id = element.attr("id"),
          id = css_id.replace(options.taskId, ""),
          object = data[id];

      // Удаляем старый элемент
      removeElement(object);

      // Меняем код объекта
      object.code = index;

      // Создаем новый элемент
      generateElement(object);

      // Обновляем локальное хранилище
      data[id] = object;
      localStorage.setItem("todoData", JSON.stringify(data));

      // Прячем область удаления
      $("#" + defaults.deleteDiv).hide();
    }
  });
});
// Добавляем функцию для удаления блока
$("#" + options.deleteDiv).droppable({
  drop: function(event, ui) {
    var element = ui.helper,
        css_id = element.attr("id"),
        id = css_id.replace(options.taskId, ""),
        object = data[id];

    // Удаление старого элемента
    removeElement(object);

    // Обновление хранилища
    delete data[id];
    localStorage.setItem("todoData", JSON.stringify(data));

    // Прячем область удаления
    $("#" + defaults.deleteDiv).hide();
  }
})
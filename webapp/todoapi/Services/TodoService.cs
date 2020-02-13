using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace todoapi 
{

    class TodoService: ITodoService
    {
        private readonly TodoContext _context; 
        private readonly ILogger _logger;
        public TodoService(TodoContext context,ILogger<TodoService> logger)
        {
            _context = context;           
            _logger = logger;   
        }


        public IEnumerable<Todo> Get()
        {
            if(_context.Todos.Count() == 0){
                _logger.LogInformation("No Tasks in Database. hence return junk");
            }
            return _context.Todos;
        }

        public Todo Get(int id)
        {
            return _context.Todos.Where( task => task.Id == id).SingleOrDefault();

        }
        public Todo Create(Todo todo)
        {

            _context.Todos.Add(todo);
            _context.SaveChanges();
            
            return todo;
        }
    }
}
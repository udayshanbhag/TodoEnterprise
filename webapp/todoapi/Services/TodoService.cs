using System;
using System.Collections.Generic;
using System.Linq;
namespace todoapi 
{

    class TodoService: ITodoService
    {
        
        private static List<Todo> _tasks = new List<Todo>
        {
            new Todo(){Id =1,TargetDate=DateTime.Parse("02/02/2020"), Name="Rent", Description="Pay Rent ",Completed = false },
            new Todo(){Id =2,TargetDate=DateTime.Parse("05/02/2020"), Name="Water bill", Description="Pay water bill ",Completed = true }
        };



        public IEnumerable<Todo> Get()
        {
            return _tasks;
        }

        public Todo Get(int id)
        {
            return _tasks.Where( task => task.Id == id).SingleOrDefault();

        }
        public Todo Create(Todo todo)
        {
            _tasks.Add(todo);
            return todo;
        }
    }
}
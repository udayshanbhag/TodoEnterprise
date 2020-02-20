using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
 using Microsoft.AspNetCore.Cors;

namespace todoapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {

        private readonly ILogger<TodoController> _logger;
        private readonly ITodoService _todoservice;

        public TodoController(ILogger<TodoController> logger, ITodoService todoservice)
        {
            _logger = logger;
            _todoservice = todoservice;
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            _logger.LogInformation("Received GET Request ");
            TodoCounters.IncrementTodoGetRequests();

            return _todoservice.Get().ToArray();
        }

        [HttpGet("{id}", Name = "GetTask")]
        public Todo Get(int id)
        {
            _logger.LogInformation($"Received GET Request for {id}");
            TodoCounters.IncrementTodoGetRequests();

            return _todoservice.Get(id);
        }

        [HttpPut]
        public IActionResult Update(Todo todo)
        {
            _logger.LogInformation("Received PUT Request ");

            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");
            TodoCounters.IncrementTodoUpdateRequests();

            _todoservice.Update(todo);

            return Ok();

        }

        [HttpPost]
        public IActionResult Create(Todo todo)
        {
            _logger.LogInformation("Received POST Request ");

            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");
            TodoCounters.IncrementTodoPostRequests();

            _todoservice.Create(todo);

            return CreatedAtRoute("GetTask", new { id = todo.Id }, todo);

        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace todoapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {

        private readonly ILogger<TodoController> _logger;

        public TodoController(ILogger<TodoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            var service = new TodoService();
            return service.Get().ToArray();
        }

        [HttpPost]
        public IActionResult  Create(Todo todo)
        {
            if (!ModelState.IsValid)
            return BadRequest("Invalid data.");
            var service = new TodoService();
            service.Create(todo);
            
            return Ok();

        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;

namespace todoapi
{
    public interface ITodoService
    {
        public IEnumerable<Todo> Get();

        public Todo Create(Todo todo);

    }
}
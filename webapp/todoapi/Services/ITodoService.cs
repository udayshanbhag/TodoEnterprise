using System;
using System.Collections.Generic;
using System.Linq;

namespace todoapi
{
    public interface ITodoService
    {
        public IEnumerable<Todo> Get();

        public Todo Get(int id);

        public Todo Create(Todo todo);

    }
}
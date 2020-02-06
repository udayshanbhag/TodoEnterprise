using System;

namespace todoapi
{
    public class Todo
    {
        public int Id { get;set;}
        public DateTime TargetDate { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool Completed { get; set; }

    }
}

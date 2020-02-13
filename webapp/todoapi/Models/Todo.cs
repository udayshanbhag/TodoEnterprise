using System;

namespace todoapi
{
    public class Todo
    {
        public long Id { get;set;}
        public DateTime TargetDate { get; set; }

        public string Name { get; set; }
        public string User { get; set; }

        public string Description { get; set; }

        public bool Completed { get; set; }

        public DateTime CreeatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }


    }
}

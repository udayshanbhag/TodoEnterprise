using Prometheus;

namespace todoapi
{
    class TodoCounters
    {
        private static readonly Counter todo_get_requests = Metrics.CreateCounter("todo_get_requests", "Total get requests");
        private static readonly Counter todo_put_requests = Metrics.CreateCounter("todo_put_requests", "Total put requests");
        private static readonly Counter todo_post_requests = Metrics.CreateCounter("todo_post_requests", "Total post requests");

        public static void IncrementTodoGetRequests()
        {
            todo_get_requests.Inc();
        }

        public static void IncrementTodoPostRequests()
        {
            todo_post_requests.Inc();
        }
        public static void IncrementTodoUpdateRequests()
        {
            todo_put_requests.Inc();
        }


    }
}
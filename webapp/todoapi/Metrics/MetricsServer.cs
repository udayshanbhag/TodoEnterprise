using Prometheus;
using Microsoft.Extensions.Logging;

namespace todoapi
{
    public 
    class MetricsServer
    {
        private readonly ILogger<MetricsServer> _logger;
        public MetricsServer(ILogger<MetricsServer> logger)
        {
            _logger = logger;
            
        }
         public void Initialize(){
             var server = new KestrelMetricServer(hostname: "*", port: 5002);
             server.Start();
             _logger.LogInformation("Metrics server started successfully");
        }
    }
}
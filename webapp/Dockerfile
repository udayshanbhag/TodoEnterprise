FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
COPY bin/release/netcoreapp3.1/publish/ app/
COPY bin/release/netcoreapp3.1/publish/todoapi/appsettings.json app/
ENTRYPOINT ["dotnet", "todoapi.dll"]
WORKDIR /app
EXPOSE 80
EXPOSE 5002

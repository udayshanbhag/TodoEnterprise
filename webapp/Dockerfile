FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
COPY bin/release/netcoreapp3.1/publish/ app/
ENTRYPOINT ["dotnet", "app/todoapi.dll"]
EXPOSE 80

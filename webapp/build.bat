 dotnet publish -c Release
 docker build -t todoapi:1.0 -f Dockerfile .


 ng build --prod --base-href /webui --deploy-url /webui/
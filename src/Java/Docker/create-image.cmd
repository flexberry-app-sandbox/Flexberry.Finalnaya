docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finalnaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t finalnaya-java/app ../../..

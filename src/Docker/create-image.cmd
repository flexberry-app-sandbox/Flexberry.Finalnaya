docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finalnaya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t finalnaya/app ../..

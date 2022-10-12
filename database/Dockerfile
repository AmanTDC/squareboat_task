FROM mysql
MAINTAINER aman gupta <aman26121999@gmail.com>
WORKDIR .
COPY . .


ENV MYSQL_ROOT_PASSWORD password@root
ENV MYSQL_DATABASE=squareboat_task
# RUN mysql -uroot -p"MYSQL_/ROOT_PASSWORD"
ADD db.sql /docker-entrypoint-initdb.d

EXPOSE 3306
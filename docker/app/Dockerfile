FROM php:8.3.16-fpm

ENV TZ Asia/Tokyo

RUN apt-get update && \
    apt-get install -y git unzip libzip-dev libicu-dev libonig-dev && \
    docker-php-ext-install intl pdo_mysql zip bcmath

COPY ./docker/app/php.ini /usr/local/etc/php/php.ini

COPY --from=composer:2.8.5 /usr/bin/composer /usr/bin/composer

# node.jsとnpmをインストール
RUN apt-get install -y nodejs npm && npm install n -g && n 23.7.0

WORKDIR /backend
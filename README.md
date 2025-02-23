## Laravel プロジェクト構築手順

1. **ディレクトリの移動**
    
    LaravelプロジェクトのDocker設定があるディレクトリに移動します。
    
    ```bash
    cd laravel
    ```
    
2. **Dockerコンテナのビルドと起動**
    
    Dockerイメージをビルドし、コンテナをバックグラウンドで起動します。
    
    ```bash
    docker compose build
    docker compose up -d
    ```
    
3. **Laravel プロジェクトのセットアップ**
    - **Laravel プロジェクトを作成**
        
        コンテナ内にLaravelプロジェクトを作成します。
        
        ```bash
        docker compose exec backend composer create-project --prefer-dist laravel/laravel .
        ```
        
    - **アプリケーションキーの生成**
        
        Laravelのアプリケーションキーを生成して、`.env`ファイルに設定します。
        
        ```bash
        docker compose exec backend php artisan key:generate
        ```
        
    - **ストレージリンクの作成**
        
        `public/storage`ディレクトリへのシンボリックリンクを作成します。
        
        ```bash
        docker compose exec backend php artisan storage:link
        ```
        
    - **ディレクトリの権限設定**
        
        `storage` と `bootstrap/cache` ディレクトリに書き込み権限を設定します。
        
        ```bash
        docker compose exec backend chmod -R 777 storage bootstrap/cache
        ```
        
    - **データベースのマイグレーション**
        
        データベーステーブルを作成します。
        
        ```bash
        docker compose exec backend php artisan migrate
        ```
      - **データベースのマイグレーション**
      
      - **npmのパッケージインストール**
      
      ```bash
      docker compose exec front npm install @phosphor-icons/react animate.css axios framer-motion react-fast-marquee react-paginate react-slick sass slick-carousel swiper
      ```
# Setup

## Run in foreground
```
docker-compose up
```

## Run in background
```
docker-compose up -d && docker logs -f app
```

## Test
Go to [localhost:3000](localhost:3000)

## To add npm package
### Go into the container
```
docker exec -it app bash
```

### Once you're in the contaimer, install your package
```
npm install --save package-name
```
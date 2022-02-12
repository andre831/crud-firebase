## Hello Guys !!!

I built this for study. A simple CRUD with connection Firebase in React and Styled-Components.

## Run

You can to up container with command \n

> `docker build -t crud-firebase:dev .`

__then__

>   
    docker run \
    --it \
    --rm \
    -v ${PWD}:/app \
    -v /node_modules/app \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    --name crud-firebase \
    crud-firebase:dev

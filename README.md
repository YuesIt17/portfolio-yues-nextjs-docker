<div align="center"> 
  <h1>Project telegram contest chart 📈</h1>
  <h3><a href="https://yuesit17.github.io/hw_telegram_contests/" target="_blank">View demo</a></h3>
  <h3>Auto formatted with Prettier, tested with Jest + Testing-library + Redux-saga-test-plan</h3>
</div>

![Tech logos](https://raw.githubusercontent.com/YuesIt17/hw_telegram_contests/master/public/img/project_tech.jpg)

![Project_example](https://raw.githubusercontent.com/YuesIt17/hw_telegram_contests/master/public/img/project_example.gif)

## What is this and why is it 🤔

- The topic was taken from telegram contest https://t.me/contest/7
- And it is needed for studying new technologies and structuring knowledge

## Features 💻

- Proven, scalable and easy-to-understand project with Redux Ducks architecture
- Client written in modern React with using NextJS and Next/router, only functional components with React hooks and custom hooks
- A variety of custom light-weight UI components (with using [emotion](https://emotion.sh/docs/styled)) such as input, page, layout etc
- Redux and Redux-saga are used to manage application state with reduxjs/toolkit
- Server written in node.js with express

## How run app 🚀

- Install packages using command `yarn install`
- Run app with server `yarn local`
- Run app witout server with mock data `yarn dev`
- App should now be running on http://localhost:3000/
- Run srorybook `yarn storybook`

## Running tests and check code ✔️

- Run using command `yarn test`
- Check project with lint using command `yarn lint`
- Run test and lint using command `yarn precommit`
- Check UI components with command `yarn chromatic`

## What's missing?

There are features missing from this showcase product which should exist in a real product:

## Proper authentication system 🔐

We currently store the username in local storage and run the project without valid credentials. In a real product, we would like to implement a proper email and password authentication system.

## Chart map modification🗺️

Need to add a slider on the chart map to view the details

## Tooltip for chart📋

Need to add tooltip for coordinate points

## Cypress tests 🧪

Need to implement UI testing in a project using Cypress.

## Deploy with build

- Run using command `yarn deploy`

## Settings of Docker

- add Dockerfile and file of nginx (conf.d)
- build image of app with commmand: docker build -t yuesit17/yuit_chart --target normal -f infra/docker/Dockerfile .
- check image via command: docker images
- run container of app: docker run -p 127.0.0.1:3000:8080/tcp yuit_chart
- check container via: docker ps
- exect inside to container: docker exec -it CONTAINER_ID sh
- go to http://localhost:3000/
- for remove container: docker rm -f CONTAINER_ID
- for remove image: docker rmi IMAGE ID
- for push to hub.docker.com:
  - in the Docker Desktop GUI and select the Sign in OR via command: docker login
  - docker push YOUR_DOCKER_USERNAME/IMAGE_NAME, e.g. docker push yuesit17/yuit_chart

## Deploy app to vm with docker image

1. Connect to vm:

- ssh -i c:\Users\some.user\.ssh\id_ed25519 evgeny-work@<VM_PUBLIC_IP> (e.g. evgeny-work@51.250.46.87)

2. Set up Docker's apt repository:

- add Docker's official GPG key:

  - sudo apt-get update
  - sudo apt-get install ca-certificates curl
  - sudo install -m 0755 -d /etc/apt/keyrings
  - sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  - sudo chmod a+r /etc/apt/keyrings/docker.asc

- add the repository to Apt sources:
  - echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  - sudo apt-get update

3. Install the Docker packages:

- sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

4. Verify that the Docker Engine installation is successful by running the hello-world image:

- sudo docker run hello-world

5. Pull image from docker hub and run container:

- sudo docker pull yuesit17/yuit_chart
- check image: sudo docker images
- run container: sudo docker run -d -p 3000:8080/tcp yuesit17/yuit_chart
- check container: sudo docker ls
- go to app: http://<VM_PUBLIC_IP>:3000 (e.g. http://51.250.46.87:3000/)

## Settings of docker network

- create network: docker network create -d bridge yuit-net
- check network: docker network ls
- run container: docker run --network=yuit-net --name yuit-chart-frontend --rm -itd -p 127.0.0.1:3000:8080/tcp yuesit17/yuit_chart
- docker exec -it yuit-chart-frontend sh -c 'ping yuit-chart-db'
- check container with network: docker inspect
- force remove all container by id with volumes associate: docker rm -fv $(docker ps -aq)

## License

[MIT](https://opensource.org/licenses/MIT)

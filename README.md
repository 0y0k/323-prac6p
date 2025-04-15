# 323-prac6p

### required tools

Git 

Visual Studio code 

Node.js 

Docker

Kubernetes 

Kubernetes CLI (kubectl) 

Docker CLI

### steps

1.Build the Docker Image

<code>docker build -t microservice:latest .</code>

2.Push the Image

<code>docker login</code>

<code>docker tag microservice:latest 0y0k/microservice:latest</code>

<code>docker push 0y0k/microservice:latest</code>

3.Create deployment.yaml and service.yaml

<code>kubectl apply -f deployment.yaml</code>

<code>kubectl get deployments</code>

<code>kubectl get pods</code>

<code>kubectl apply -f service.yaml</code>

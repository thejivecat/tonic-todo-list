## 🛠️ Backend Setup

### 1. Install Docker

Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.

### 2. Clone Repository

git clone https://github.com/thejivecat/tonic-todo-list.git
cd tonic-todo-list

### 3. Create the .env file for Backend

Inside the server/ directory, create a .env file with the following contents:
MONGO_URI=mongodb://mongo:27017/tonic-todo
PORT=5000

### 4. Start the Server with Docker

docker compose up --build

Once the build completes, the backend server should be accessible at: http://localhost:5001

To verify, you can open a browser and go to that URL — it should return: "Server is up and running!"

### 5. Stopping Server

run this command:
docker compose down --volumes --remove-orphans

## 🛠️ Frontend Setup

### 1. Install Packages

run npm install in the client folder of this directory

### 2. Run application

run the command npm run dev to start the application
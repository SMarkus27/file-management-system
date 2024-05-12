# File Management System

This System you can do:
* Upload and process files
* CRUD files data on Mongodb


### Tech Stack
* Typescript
* MongoDB
* SocketIo
* CI github actions

### First Step
* Creates an .env files on file_service/backend, file_service/frontend and mock folders. Use .env_example as example

#### If we prefer to running application without Docker
* This command will install all dependencies.
```
sh install.sh
```
### Running System without Docker
* You need to open three terminals and execute the follow commands
```
Terminal1:

cd file_service/backend
yarn start:backend

Terminal2:
cd file_service/frontend
yarn start:frontend

cd mock
yarn start

```

### Running System with Docker
* For running  application with docker execute:
```
docker compose up -d
```

### Testing application
* On browser access

```
http://127.0.0.1:8080/
```

* You can upload any csv files

![Screenshot from 2024-05-12 17-24-09](https://github.com/SMarkus27/file-management-system/assets/71283631/475a8af0-ae0a-456a-88f6-0e2c4e351604)


### For Get, Upload and Delete Data.
* Recommend to use Postman or insomnia.

#### Get all Data
```
http://localhost:3001/api/v1/files

```

#### Get one Data
```
http://localhost:3001/api/v1/files/id

```


#### Update Data
```
http://localhost:3001/api/v1/files/id

```   


#### Delete Data
```
http://localhost:3001/api/v1/files/id

```
                                                                                                                                                                                                  
#### License

This project is under license [MIT](/LICENSE).

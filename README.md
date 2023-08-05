# midterm-gigih

### 1. Database Structure
database name : tokopedia-play
It has 3 collections : products,comments, videos.

![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/c5e8763a-2de5-4367-93cd-5e6fd3e8bdf2)

### 2. API Structure
- Controllers
- Models
- Routes
- Services

### 3.  API Request & Response

POST /product

![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/169a58cd-a204-493a-8861-ca95060dd635)

GET /products/:videoId
![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/f28cd190-db97-4404-9866-e7fabdc9bb35)

GET /videos

![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/fe1e9cb8-51fd-4ead-8765-68c9e0ebb23a)

GET /by-title/:titleVideo
- URL Params : VideoID=[uuid]
- Data Params: VideoId

![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/d8503575-80a9-4f97-844b-3eab1bbe6a22)

POST /videos

![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/bce0e3b0-1ee1-483c-958c-728c78ab71df)

POST /comments/:videoId/comments

![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/ec9840e6-0c1d-45b2-ad7a-1fa9e2f45659)

GET /comments/:videoId/comments

![image](https://github.com/mol-ana/midterm-gigih/assets/59798126/6124cf37-4b8e-4ad2-9f8f-4e7392c4cb78)

### 4. Local Running

change .env file with your mongodb connection & change port if necessary. Then run npm install. Finally npm start.

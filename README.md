# User Data Service

This is a small backend service that provides insights into user data.

## Getting Started

To get started, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/mostafaelhabrok/user-insights.git
```

2. **Install dependencies:**

```
cd user-insights
npm install
```

3. **Add environmet variables:**
create .env.local file in the project root then add the following:

```
BASE_URL=http://localhost:3000
```

4. **Start the service:**

```
npm run dev
```

The service will start running at http://localhost:3000.


## Setting Up with Docker

To get started, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/mostafaelhabrok/user-insights.git
```

2. **Build the Docker Image:**

```
docker build -t user-insights .
```

3. **Run the Docker Container:**

```
docker run -p 3000:3000 -e BASE_URL=http://localhost:3000 user-insights
```

The service will start running at http://localhost:3000.

## API Endpoint

### Filter Users
You can filter users based on specific criteria by sending a GET request to the /api/users endpoint with the following query parameters:

name: Search for users by name (case insensitive).
age: Filter users by age.
activeStatus: Filter users by active status.

#### Example usage:
GET /api/users?name=John&age=30&activeStatus=1
This will return a filtered list of users matching the specified criteria.

### Data Aggregation
The service also provides data aggregation functionalities:
Average age of users.
Count of active and inactive users.

### Sort Users
Users can be sorted by their different data.
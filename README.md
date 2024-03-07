# User Data Service

This is a small backend service that provides insights into user data.

## Getting Started

To get started, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/yourusername/user-insights.git
```

Install dependencies:

```
cd user-insights
npm install
```

Start the service:

```
npm run dev
```

The service will start running at http://localhost:3000.

## API Endpoint

### Filter Users
You can filter users based on specific criteria by sending a GET request to the /api/users endpoint with the following query parameters:

name: Search for users by name (case insensitive).
age: Filter users by age.
activeStatus: Filter users by active status (1 for active, 2 for inactive).

#### Example usage:
GET /api/users?name=John&age=30&activeStatus=1
This will return a filtered list of users matching the specified criteria.

### Data Aggregation
The service also provides data aggregation functionalities:
Average age of users.
Count of active and inactive users.

### Sort Users
Users can be sorted by their last login date.
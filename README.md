# Noti-Service

Noti-Service is a notification service designed to handle and deliver notifications efficiently across various channels.

## Features

- Multi-channel notification support (e.g., email, SMS, push notifications).
- Scalable and modular architecture.
- Easy integration with existing systems.
- Customizable notification templates.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Noti-Service.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Noti-Service
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the service:
    ```bash
    npm start
    ```
2. Configure your notification channels in the `config` folder.
3. Use the provided API endpoints to send notifications.

## Configuration

Update the `config` files to set up your preferred notification channels and credentials.

## 👤 Author

- Name: Zameer Basha S
- GitHub: [ZBS-1910](https://github.com/ZBS-1910)
- Email: zameer1910basha@gmail.com

## 📝 API Documentation

### Base URLs
- Development: `http://localhost:3002`
- API Gateway: `http://localhost:3000`

### Available Endpoints

| Version | Method | Endpoint | Description |
|---------|--------|----------|-------------|
| v1 | GET | `/api/v1/info` | Service health check |
| v1 | POST | `/api/v1/bookings` | Create new booking |
| v1 | POST | `/api/v1/bookings/payments` | Process booking payment |
| v2 | GET | `/api/v2/info` | Version 2 info endpoint |

### Example Response (Health Check)

```json
{
    "success": true,
    "message": "Booking service API is live",
    "error": {},
    "data": {}
}
```


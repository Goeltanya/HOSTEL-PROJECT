# Entity Relationship Diagram (ERD)

The Hostel Management System's database is designed with the following entities and relationships:

## Entities:
- **Users** (id, name, email, password, role)
- **Rooms** (id, type, availability, price)
- **Bookings** (id, userId, roomId, startDate, endDate)
- **Fees** (id, userId, amount, dueDate, status)
- **Attendance** (id, userId, date, status)
- **Notifications** (id, userId, message, date)
- **Payments** (id, userId, amount, paymentMethod, paymentDate)

## Relationships:
- **Users** can have multiple **Bookings** (1-to-many)
- **Rooms** can have multiple **Bookings** (1-to-many)
- **Users** can have multiple **Payments** (1-to-many)
- **Users** can have multiple **Notifications** (1-to-many)
- **Users** can have multiple **Attendance** records (1-to-many)

## Diagram:

![ERD](./docs/ERD.png)
> The diagram visualizes the relationships between users, rooms, bookings, payments, and other entities in the system.

# php-task

---

## ▶️ How to Run the Application



- XAMPP or any local PHP server (for backend)
- Node.js and npm installed (for frontend)
- Git installed

---

### 🔁 Backend Setup (PHP API)

1. **Open XAMPP** and start **Apache** and **MySQL**.
2. **Place the `user-api` folder** in your `htdocs` directory:  
   Example:  
   `C:\xampp\htdocs\php-assignment\user-api`
3. **Create a MySQL Database**:
   - Open `http://localhost/phpmyadmin`
   - Create a new database named `userdb`
   - Run this SQL query to create the table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  dob DATE
);

### Test API in browser or Postman:
http://localhost/php-assignment/user-api/api.php

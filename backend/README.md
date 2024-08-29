## Table of contents

1. Clone the repository:
   ```bash
   git clone https://github.com/prvn347/fullstack-assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fullstack-assignment/backend
   ```
3. Run the following command to start the application:
   ```bash
   docker volume create postgres-data # (optional) run this command if you face any mount volume / volume not exist error
   docker-compose up
   ```

### Without Docker

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prvn347/fullstack-assignment.git
   cd  fullstack-assignment/backend
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   Create a .env file in the root of your project and add the following

   ```bash
   DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
   PORT=3000


   ```

4. **Migrate the Database**:
   ```bash
   npx prisma migrate dev
   ```
5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

Open http://localhost:3000/ping with your browser to see the result.

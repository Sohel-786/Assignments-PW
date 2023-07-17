**Register User**
----
  Registeration, Add json data about a single user in Database. 

* **URL**

  /register

* **Method:**

  `POST`
* **Payload:**
  
  {"name" : "user_name", "email": "user_email", "password":"user_password"}

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ "msg" : "User Registered Successfully" }`

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ Error : "User already exists" }`

  OR

  * **Code:** 404 Bad Request <br />
    **Content:** `{ "msg" : "all input fields are required" }`

**----**

**Login**
----
  Check data about a single user in Database and Login.   

* **URL**

  /login

* **Method:**

  `POST`
* **Payload:**
  
  {"email": "user_email", "password":"user_password"}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "msg" : "User Login Successfully" }`

* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ "msg" : "No account associated with this email" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ "msg" : "all input fields are required" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ "msg" : "Password is wrong" }`
**Routes**
----

  *  **/SignUp**
  *  **/Login**
  *  **/**

**Register User**
----
  Registeration, Add json data about a single user in Database. 

* **URL**

  /SignUp

* **Method:**
   * On submit it will take action on `/signup`
       & 
   * method :  `POST`
* **Payload:**
  
  {"name" : "fullname_of_user", "username" : "username", "email": "user_email", "password":"user_password", "bio" : "bio_of_user"}

    * all are mandatory except `bio` - it's optional

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** it will redirect to `Login` Page `res.redirect('\Login')`

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ success: false , "msg" : "Account already exists" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ success : false, "msg" : 'Please provide valid email' }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ "msg" : "All input fields are required" }`

----

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
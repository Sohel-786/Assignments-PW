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

   * On submit it will take action on `/signup` route
       & 
   * method :  `POST`

* **Payload:**
  
  {"name" : "fullname_of_user", "username" : "username", "email": "user_email", "password":"user_password", "bio" : "bio_of_user"}

    * ALl fields are mandatory except `bio` - it's optional

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

* **Note:**
    
  * If you are already logged in and haven't logged Out yet then it will not show you the SignUp page even if you hit the `/SignUp` route

----

**Login**
----
  Check data about a single user in Database and Login.   

* **URL**

  /Login

* **Method:**

   * On submit it will take action on `/login` route
       & 
   * method :  `POST`

* **Payload:**
  
  {"username": "username OR user_email", "password":"user_password"}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** it will redirect to `User_page` through `res.redirect('\')` 

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ success : false , "msg" : 'Invalid Credentails' }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ "msg" : "All input fields are required" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ success : false , "msg" : 'Password is Wrong' }`

* **Note:**

  * If you are already logged in and haven't logged Out yet then it will not show you the   Login page even if you hit the `/Login` route

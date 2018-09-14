## Homework Assignment 1
Server listening on port 3000 or 3001 depending on set enviroment. The API only accepts "POST /hello" request.
 ```JSON
 // If folowing playload is sent, sever will respond
 // with personalised massege saying Hello, Jane.
 // In any other case it will return 404
 
 {
   "name" : "Jane"
 }
 ```

var zapi_lib = require("./index");


//GENERAL SETTINGS
var BASE_URL = 'https://c505465a.ngrok.io'
var ACCESS_KEY = 'NzgzNmExMWYtNWI4YS0zYmIyLWI2MmEtMzQ1ZTExOTU5MGQyIGFkbWluIFVTRVJfREVGQVVMVF9OQU1F'
var SECRET_KEY = 'BaZmvGPS5y4hJ_MQYcudbayV7Xb7cza6VsX8vEEwduo'
var USER = 'admin'
var zapi_instance = zapi_lib.init(BASE_URL, ACCESS_KEY, SECRET_KEY, USER);



//API SPECIFIC JWT
var METHOD = "GET"
var API_URI = 'https://c505465a.ngrok.io/public/rest/api/1.0/cycles/search?projectId=10000&versionId=10000'
var JWT_EXPIRE = 3600

var token = zapi_instance.generateJWT(METHOD, API_URI, JWT_EXPIRE);

console.log(token);
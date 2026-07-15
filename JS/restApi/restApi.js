/*
API - is a way to interface two or more applications.
example is how we use bluetooth in multiple applications in android. 
        - Nodejs file system API

APIs have rules and guidelines that should be followed.

 REST API (Representational State Transfer Application Programming Interface)
It allows different devices or application to communicate over the internet. Using <http or https>
http - Hyper text transfer protocol.

1. What type of applications can be interfaced.
    - The application must be running a <http client>
    - Http client runs on a <client device>
    - Client device is hardware that can connect to the internet.
    1. laptop
    2. mobile phone
    3. smart phones
    4. iot devices
    ... etc.

2. HTTP Clients
    - Browser
    - Curl
    - POSTMAN
    ... etc.

3. Communication
    - Is a one way communication.
        server and client -> client makes a request and server responds. (server is just another computer running the http client.)
    - 

//LookUps.
*DNS lookup. Domain Name Server.
*linode - buy server for vpn. (site)
*pihole 

4. How to make a request.
    - url (universal resource locator)
    - Method; (GET method, POST, PATCH, DELETE).
    - Headers; (security, Authorization) / optional and depends on the API
    - Body; (form, image, json)
    - parameters; (meta information)


Todo:
1. Install Postman
2. Go to your fav site, click inspect, go to the network tab.
        -Identify method, url & params if any. 
        -Check the request time.
3. for same requests check it on Postman and Curl clients.
*/

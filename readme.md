# Express Crash Course

## Quick Start
  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm run start-dev
```
  View the website at: http://localhost:8000
  
  DEMO the website at: https://express-crash-course.herokuapp.com/

## Examples api

  GET:
```bash
$ http://localhost:3000/apis/restaurants
```  
  GET by id:
```bash
$ http://localhost:3000/apis/restaurants/:id
```  
 POST:
```bash
$ http://localhost:3000/apis/restaurants

Example data
  {
    "name": "ไอติมทอด",
    "imageURL":"https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/3-CZNTJCKZEF3WE2/hero/3506e7a5051f4a8ebddf03a1a6f610fc_1599813799805006784.jpeg",
    "type": "Partner, Small Bites/Snacks"
  }
```
  PUT:
```bash
$ http://localhost:3000/apis/restaurants/:id

  Example data
  {
    "name": "ไอติมทอด PUT",
    "imageURL":"https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/3-CZNTJCKZEF3WE2/hero/3506e7a5051f4a8ebddf03a1a6f610fc_1599813799805006784.jpeg",
    "type": "Partner, Small Bites/Snacks"
  }
```  
  PATCH:
```bash
$ http://localhost:3000/apis/restaurants/:id

  Example data
  {
    "name": "ไอติมทอด PATCH",
  }
``` 
  DELETE:
```bash
$ http://localhost:3000/apis/restaurants/:id
```  

   

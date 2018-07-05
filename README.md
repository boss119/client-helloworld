## Project Hello World
this project use nodeJs [Express, Mocha, Chai] and deploy on Heroku.

## Requiment
- unit Testing use Mocha & Chai
- Express Deploy on Heroku

## Set up
##### Install Mocha
- npm install mocha --save

##### Install Chai
- npm install chai --save

##### Install Express
- npm install express --save

## Run
##### unit test
- npm test

##### start
- npm start

##### MVC
- model = ส่วนที่เก็บข้อมูล
- view = ส่วนที่แสดงผลข้อมูลให้กับผู้ใช้
- controller = เป็นตัวกลางในการเชื่อมต่อทั้ง Model และ View

##### Testing Pyramid:
- unit tests = ทดสอบการทำงานระดับฟังก์ชัน
- integration tests = ทดสอบการทำงานระดับ API
- e2e tests = ทดสอบการทำงานระดับ UI

##### ESlint
- eslint = รูปแบบมาตรฐานในการเขียนโค้ดให้สวย

1.JSON Kay:value /
2.http code => {100 = continue, 200 = success, 400 = bad request, 403 = permission, 404 = not found, 500 = internal server error, 502 = bad gateway}
3.JSON format /
4.test null value /
5.null value return? = http 400 /
*no input a or b = (error return http 400) /
**detect request number if not number == 400 return json message what about error? /

check null value /
return object /
show exception handling show error /_\

controller check value query if not found return not found. try catch /
do + - * /
unit tests


4. How to run WebdriverIO+Cucumber: <br />
    a. Install nodejs <br />
    b. Git clone <br />
    c. Go to directory of project <br />
    d. npm install <br />
    e. npx wdio run ./wdio.conf.js <br />
    f. For scenario-case please check on .feature files <br />
Video: https://drive.google.com/file/d/19fWLzZPY2_wwkHJ8d2e3FRM6jRa8C6hF/view?usp=drive_link <br /> 

    2.<br />
    A. <br />
       SELECT OD.id,OD.order_id,OD.qty,OD.price,OD.create_date,OD.update_date,P.product_name,<br />
       P.product_description,P.create_date,P.update_date,O.user_id,O.brand_id,O.alamat_kirim,O.create_date,O.update_date<br />
       FROM order_detail OD<br />
       INNER JOIN product P ON OD.sku = P.sku<br />
       INNER JOIN orders O ON O.id = OD.order_id<br />
    
    B. <br />
       SELECT U.name,U.address,U.create_date,U.update_date,C.name,C.address,C.create_date,C.update_date <br />
       FROM users U <br />
       INNER JOIN company C ON U.company_id = C.id <br />

3.Postman
     https://github.com/andit037/autoTest/files/13474246/Dummy.postman_collection.zip
     <br />
     Video: https://drive.google.com/file/d/1z8sbkhekFkkE2Bf3x7ugIkQo6obrm99F/view?usp=drive_link
     <br />

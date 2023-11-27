4. How to run WebdriverIO+Cucumber:
    a. Install nodejs
    b. Git clone
    c. Go to directory of project
    d. npm install
    e. npx wdio run ./wdio.conf.js
    f. For scenario-case please check on .feature files

3. 
    A. 
       SELECT OD.id,OD.order_id,OD.qty,OD.price,OD.create_date,OD.update_date,P.product_name,
	   P.product_description,P.create_date,P.update_date,O.user_id,O.brand_id,O.alamat_kirim,O.create_date,O.update_date
	   FROM order_detail OD
	   INNER JOIN product P ON OD.sku = P.sku
	   INNER JOIN orders O ON O.id = OD.order_id
    
    B.
       SELECT U.name,U.address,U.create_date,U.update_date,C.name,C.address,C.create_date,C.update_date
	   FROM users U
	   INNER JOIN company C ON U.company_id = C.id
This is my first web project using java. This application intends to make the process of bill handling hassle-free.An admin monitors the users and checks for unsubmitted bills and informs the users regarding the status of bill approval.
*MYSQL Schema*
bills table
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| user     | varchar(20) | YES  |     | NULL    |       |
| bill     | varchar(50) | YES  |     | NULL    |       |
| deadline | date        | YES  |     | NULL    |       |
| status   | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
users table
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| username | varchar(20) | YES  |     | NULL    |       |
| password | varchar(20) | YES  |     | NULL    |       |
| type     | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+

**NOTE:** This is just a prototype.Hence, no measures were taken in regards of privacy and security.

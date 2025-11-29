/*
psql -U postgres
postgres=# \l
postgres=# CREATE DATABASE bookDB;
CREATE DATABASE
postgres=# \l
postgres=# \c vendordb


vendordb=# \dt
           List of relations
 Schema |    Name    | Type  |  Owner
--------+------------+-------+----------
 public | vendorinfo | table | postgres
(1 row)

vendordb=# \l

vendordb=# \d vendorinfo
                       Table "public.vendorinfo"
   Column    |          Type          | Collation | Nullable | Default
-------------+------------------------+-----------+----------+---------
 id          | character varying(10)  |           | not null |
 name        | character varying(20)  |           |          |
 description | character varying(200) |           |          |
Indexes:
    "vendorinfo_pkey" PRIMARY KEY, btree (id)
*/

CREATE DATABASE vendorDB;

CREATE TABLE vendor_info(
    id VARCHAR(200) PRIMARY KEY,
    name VARCHAR(200),
    description VARCHAR(200)
);

INSERT INTO vendor_Info(id,name,description) VALUES(101,JS ENTERPRISE,A good Electromechanical Item supplier);

SELECT  * FROM  vendor_Info

    // const books = await pool.query("SELECT  * FROM  vendor_Info");
    const books = await pool.query(
      "SELECT  * FROM  vendor_Info WHERE name='JS'"
    );
    res
      .status(200)
      .json({ message: "all vendors are returned", data: books.rows });
var express = require('express'),
    router = express.Router();

var pg = require('pg');
var config = {
  user: 'pvDung', //env var: PGUSER
  database: 'DoAnCuoiKi', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'db', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var  pool = new pg.Pool(config);

global.users = [
    {
        tenDangNhap: 'pvDung',
        hoTen: 'Dung phung van',
        email: 'dungvatoi@gmail.com',
        matKhau: '123456'
    }
]

router.get('/', function(req, res) {
    res.send(global.users)
});

router.post('/', function(req, res) {
    if (!req.body.tenDangNhap) {
        return res.json({
            message: 'Ten dang nhap trong',
            error: true
        })
    }
    console.log(req.body);
    pool.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT count(username) as number FROM USERS WHERE username = $1',[req.body.tenDangNhap], function(err, result) {
            done(err);

            if(err) {
                return console.error('error running query', err);
            }
            if (result.rows[0].number === 0) {
                return res.json({
                    message: 'Ten dang nhap da ton tai',
                    error: true
                })
            }
        });
         client.query('INSERT INTO USERS(username, matkkhau, tennguoidung,email) values($1, $2, $3, $4)',[req.body.tenDangNhap, req.body.matKhau,req.body.hoTen, req.body.email]);

    });
    return res.json({
        message: 'Success',
        error: false
    })
})

module.exports = router;
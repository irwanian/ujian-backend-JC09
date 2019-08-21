var conn = require('../database')

module.exports = {

    getCategories : (req, res) => {
        var sql = `select * from categories`
        conn.query(sql, (err, results)=> {
            if(err) return res.status(500).send(err.message)

            res.status(200).send(results)
        })
    },
     addCategories : (req, res) => {
        var sql= `insert into categories set ?`
            var {nama} =req.body
            conn.query(sql, {nama}, (err,results)=> {
                if(err) return res.status(500).send(err)
                
                console.log({nama});
                sql= `select * from categories`
                
                conn.query(sql, (err, results)=> {
                    if(err) res.status(500).send(err)
                })

                return res.status(200).send(results)
            })        
    },
    deleteCategories : (req, res) => {
        var sql = `delete from categories where id = ${req.params.id}`

        conn.query(sql, (err, results)=> {
            if(err) return res.status(500).send({message :'error', err })

            var sql = `delete from movcat where idcategory = ${req.params.id}`    
            conn.query(sql, (err1, results)=> {
            if(err1) return res.status(500).send({message :'error', err })
          
        

            var sql = `select * from categories`

            conn.query(sql, (err2, results)=>{
                if(err2) return res.status(500).send({message : 'GAGAL LOAD DATA', err2})
                
                console.log('delete category suxxess');
                
                res.status(200).send(results)
            })
        })
    })
    },
    editCategories : (req, res) =>{
        var sql = `update categories set ? where id = ${req.params.id}`

        conn.query(sql, req.body, (err, results)=> {
            if(err) res.status(500).send(err.message)

            console.log(results);
            
            sql = `select * from categories`
            conn.query(sql, (err2, results)=> {
                if(err2) return res.status(500).send(err.message)

                res.status(200).send(results)
            })
        })
    }
}
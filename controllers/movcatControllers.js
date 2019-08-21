const conn = require('../database')

module.exports = {
    getMovcat : (req, res) => {
        var sql = `select distinct m.nama as nama_movie,
                    c.nama as nama_category
                    from movcat mc
                    join categories c
                    on mc.idcategory = c.id
                    join movies m
                    on m.id = mc.idmovie
                    order by m.id;
                    `
        conn.query(sql, (err, results)=> {
            if(err) return res.status(500).send({message : "can't get data from database", err})

            console.log(results);
            
            res.status(200).send(results)
        })            
    },
    addMovcat : (req, res)=> {
        var {idmovie, idcategory} = req.body
        var sql = `select idmovie, idcategory from movcat where idmovie = ${idmovie} and idcategory = ${idcategory}`

        conn.query(sql, (err1, results) => {
            if(err1){ 
            return res.status(500).send(err1)
            }if(results.length > 0){
                return res.status(200).send({status : 'error', message : 'data has already exists'})
            }
            var sql = `insert into movcat set ?`
            var data = req.body
    
        conn.query(sql, data, (err, results)=> {
            if(err) {
                res.status(500).send({message : "error", err})
            }
            console.log(results);
            

                sql = `select distinct m.nama as nama_movie,
                    c.nama as nama_category
                    from movcat mc
                    join categories c
                    on mc.idcategory = c.id
                    join movies m
                    on m.id = mc.idmovie
                    order by m.id;`

            conn.query(sql, (err2, result)=> {
                if(err2) res.status(500).send(err2)

                res.status(200).send(results)
            }) 
        })
    })

    },
    deleteMovcat : (req, res) => {
        var sql = `delete from movcat where idmovie = ${req.params.id}`

        conn.query(sql, (err, results)=> {
            if(err) res.status(500).send(err.message)

            sql = `select distinct m.nama as nama_movie,
                    c.nama as nama_category
                    from movcat mc
                    join categories c
                    on mc.idcategory = c.id
                    join movies m
                    on m.id = mc.idmovie
                    order by m.id;`
            conn.query(sql, (err2, results)=> {
                if(err2) return res.status(500).send(err2.message)

                console.log('delete suxxess');
                
                res.status(200).send(results)
            })
        })
    }
}
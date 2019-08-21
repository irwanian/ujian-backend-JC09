var conn = require('../database')




module.exports = {

    getMovies : (req, res) => {
        var sql = `select * from movies`
        conn.query(sql, (err, results)=> {
            if(err) return res.status(500).send(err.message)

            res.status(200).send(results)
        })
    },
    addMovies : (req, res) => {
        var {nama, tahun, description} = req.body
        var sql= `insert into movies set ?`
        var dataMovies = {
            nama,
            tahun,
            description
        }
        
            conn.query(sql, dataMovies, (err,results)=> {
                if(err) return res.status(500).send(err)
                
                console.log(results);
                sql= `select * from movies`
                
                conn.query(sql, (err, results)=> {
                    if(err) res.status(500).send(err)
                })

                return res.status(200).send(results)
            })        
    },
    deleteMovies : (req, res) => {
        var sql = `delete from movies where id = ${req.params.id}`

        conn.query(sql, (err, results)=> {
            if(err) return res.status(500).send({message :'error', err })
         
        var sql = `delete from movcat where idmovie = ${req.params.id}`    
        conn.query(sql, (err1, results)=> {
            if(err1) return res.status(500).send({message :'error', err })
          
        
        var sql = `select * from movies`

            conn.query(sql, (err2, results)=>{
                if(err2) return res.status(500).send({message : 'GAGAL LOAD DATA', err2})
                
                console.log('delete movie suxxess');
                
                res.status(200).send(results)
        })
    })
})
    },
    editMovies : (req, res) =>{
        var sql = `update movies set ? where id = ${req.params.id}`

        conn.query(sql, req.body, (err, results)=> {
            if(err) res.status(500).send(err.message)

            console.log(results);
            
            sql = `select * from movies`
            conn.query(sql, (err2, results)=> {
                if(err2) return res.status(500).send(err.message)

                res.status(200).send(results)
            })
        })
    }
    
}
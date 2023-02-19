// these top should always begin
const express = require("express")
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// --- end ---


const users = [
    { name: "Jane Fonda", company: "Leotards are us" },
    { name: "Marylyn Monroe", company: "MGM Studios"  },
    { name: "Tom Cruise", company: "Top gun studios"  },
    
]


//get all infomration
//takes 2 arguments, path and call back function (a call back -- ()=>{}  )
app.get("/api/users", (req, res) => {
    res.json({
        count: users.length,
        results: users
    })
})


// just get 1 result
//      "passInPath"path variable   
app.get("/api/users/:idx", (req, res) => {
    res.json({ results: users[req.params.idx] })
})


//create push/ add a users item
app.post("/api/users", (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.json({
        count: users.length,
        results: users
    })
})


//update 1 item
app.put("/api/users/:idx", (req, res) => {
    users[req.params.idx] = req.body;
    res.json({
        count: users.length,
        results: users
    })
})


//delete item based on index (idx)
app.delete("/api/users/:idx", (req, res) => {
    users.splice(req.params.idx, 1)
    res.json({
        count: users.length,
        results: users
    })
})




// these should be at the bottom
// ap listen at this port then console log out
app.listen(port, () => console.log(`NodeMond running port: ${port}`))
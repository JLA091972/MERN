// dependencies
const express = require("express")
const app = express()

//config port
const port = 8000

// express config
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// --- end ---


// const users = [
//     { name: "Jane Fonda", company: "Leotards are us" },
//     { name: "Marylyn Monroe", company: "MGM Studios"  },
//     { name: "Tom Cruise", company: "Top gun studios"  },
    
// ]



//create 
class Someone{
    constructor(){
        // this.name = faker.name.firstName()
   }
}


const { faker } = require('@faker-js/faker')

app.get("/api/randomname", ({req,res}) => {
    const randomname = faker.name.findName()
    res.json(randomname)
})

app.get("/api/someone/new", (req,res) => {
    const newPerson = new Someone ()
    res.json(randomname)
})


// these should be at the bottom
// ap listen at this port then console log out
app.listen(port, () => console.log(`NodeMond running port: ${port}`))
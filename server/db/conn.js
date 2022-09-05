const mongoose=require ("mongoose")


mongoose.connect(`${process.env.MONGO_URL}`,()=>{
    console.log("successfully connected to database")
    
},(err)=>{
    console.log(err)
})
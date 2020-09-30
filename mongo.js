const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0-s9yhp.mongodb.net/notesapp?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true})

const noteSchema = mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Second note added',
  date: new Date(),
  important: true,
})

note.save().then(result => {
  console.log(result)
  mongoose.connection.close()
})

/*
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const CmoduleSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  cmoduleName: {
    type: String,
    required: true
  },
  cmoduleDescription: {
    type: String,
    required: true
  },
  cmoduleAuthor: {
    type: String,
    required: true
  },
  cmoduleURL: {
    type:String,
    required:true
  },
  cmodulePassword: {
    type:String,
    required:true
  },
  isActive: {
    type:String
  }
});

const Cmodule = module.exports = mongoose.model('Cmodule', CmoduleSchema);

// module.exports.getUserById = function(id, callback){
//   User.findById(id, callback);
// }

// module.exports.getIndividualCourseDetailsByCourseName = function(courseName, callback){
//   const query = {courseName: courseName}
//   Individualcourse.findAll(query, callback);
// }

module.exports.getCmodulesByCourseName = (req, res, next) =>{
    
  Cmodule.find({courseName: req.body.courseName},
      (err, cmodule) => {
          if (!cmodule)
              return res.status(404).json({ status: false, message: 'Record not found.' });
          else
              return res.status(200).json({ status: true, cmodule : _.pick(cmodule,['courseName','cmoduleName','moduleDescription','cmoduleAuthor','cmoduleURL','cModulePassword','isActive']) });
      }
  );
}


// module.exports.addUser = function(newUser, callback){
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if(err) throw err;
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
//   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//     if(err) throw err;
   
//     callback(null, isMatch);
//   });
// }

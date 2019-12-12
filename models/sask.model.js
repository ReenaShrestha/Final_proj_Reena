const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  name: String,

  
});

var name = mongoose.model('name', UserSchema);

var nam = new name({ name: '/contact' });
nam.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

// or

name.create({ name: 'reeta' }, function (err, nam) {
  if (err) return handleError(err);
  // saved!
});

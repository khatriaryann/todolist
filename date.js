

// module.exports.getDate = getDate;
//
// function getDate(){
//   let today = new Date();
//
//   let options = {
//     weekday : "long",
//     day : "numeric",
//     month : "long"
//   };
//
//   return today.toLocaleDateString("en-US", options);
//
// };


// another way to define a function and return as a module is:

exports.getDate = function(){
  const today = new Date();

  const options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  };

  return today.toLocaleDateString("en-US", options);

};



exports.getDay = function(){
  const today = new Date();

  const options = {
    weekday : "long"
  };

  return today.toLocaleDateString("en-US", options);
}

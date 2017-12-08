// Description:
//This bot tells you all about the JSD 9 class with links to the class website. 
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
// This bot responds to "JSD 9" with any of the following: lessons, homework, resources, projects, exit ticket, snack signup, website, and github repo. It will also reply to thank you and you rock.
//


  module.exports = function(bot) {

    bot.respond(/JSD 9 (.*)/i, function(msg) {
      var name;
      name = msg.match[1];
      if (name == "lessons"){
        return msg.send("Here you go: https://svodnik.github.io/jsd9/pages/lessons.html");
      } else if (name == "homework") {
        return msg.send("Here you go: https://svodnik.github.io/jsd9/pages/homework.html");
      } else if (name == "resources") {
        return msg.send("Here you go: https://svodnik.github.io/jsd9/pages/resources.html");
      } else if (name == "projects") {
        return msg.send("Here you go: https://svodnik.github.io/jsd9/pages/projects.html");
      } else if (name == "exit ticket") {
        return msg.send("Here you go: https://goo.gl/forms/LQeYcI6ODiG9lt083");
      } else if (name == "snack signup") {
        return msg.send("Here you go: https://codesnacks.youcanbook.me/");      
      } else if (name == "website") {
        return msg.send("Here you go: https://svodnik.github.io/jsd9/index.html");
      } else if (name == "github repo") {
        return msg.send("Here you go: https://github.com/svodnik/JS-SF-9-resources");
      } else {
        return msg.reply("Hmm not sure where that is! Ask Sasha");
      }
  }),

  bot.respond(/thank you/i, function(msg) {
      return msg.reply("No problem!");
  }),

  bot.respond(/you rock/i, function(msg) {
    return msg.reply("I try");
  });

  }



/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

// const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

//   /* Random Example
//   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
//   return robot.hear(/ship it/i, function(msg) {
//     return msg.send(msg.random(squirrels));
//   });
// };

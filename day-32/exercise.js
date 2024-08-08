// let onlineCourse = "Web Designing";
// let price = 2000;
// let mainGoals = ["Skill", "Experience", "Money"];

// alert(onlineCourse);
// alert(price);
// alert(mainGoals);

let object = {
  name: "Web Design",
  price: 2000,
  mainGoals: ["Skill", "Experience", "Money"],
};

function getListItem(arry, arryIndex) {
  let accessElement = arry[arryIndex];
  return accessElement;
}

let firstGoal = getListItem(object.mainGoals, 2);
alert(firstGoal);

user_email = "robin_singh@example.com"
var split = user_email.split("@");
var part1 = split[0]
var half = part1.length / 2;
var part1 = part1.substring(0, (part1.length - half));
var part2 = split[1];
console.log(part1 + "...@" + part2)
function City(name, population) {
  this.name = name;
  this.population = population;
  this.getName = function() {
      return (this.name);
  };
  this.exportStr = function() {
      return ("name = " + this.name + "\n" + "population = " + this.population);
  };
}


let london = new City("asd", 12454);

console.log(london.getName());
console.log(london.exportStr());

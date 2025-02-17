/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(att) {
  this.createdAt = att.createdAt;
  this.name = att.name;
  this.dimensions = att.dimensions;
}

GameObject.prototype.destroy = function() {
  console.log(`${this.name} was removed from the game`);
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(att) {
  GameObject.call(this, att);
  this.healthPoints = att.healthPoints;
  this.weapons = att.weapons;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  console.log(`${this.name} took damage`);
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(att) {
  CharacterStats.call(this, att);
  this.team = att.team;
  this.weapons = att.weapons;
  this.language = att.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  console.log(`${this.name} offers a greeting in ${this.language}`);
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  function Villain(att) {
    Humanoid.call(this, att);
    this.attack = att.attack;
    this.defend = att.defend;
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  
  
  function Hero(att) {
    Humanoid.call(this, att);
    this.attack = att.attack;
    this.defend = att.defend;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  
  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  Villain.prototype.dracarys = function(other) {
    other.healthPoints = other.healthPoints-30;
    console.log(`${this.name} attacked ${other.name}.\n ${other.name} has ${other.healthPoints} health points left`);
    if (other.healthPoints <= 0) {
      return other.destroy();
    }
  }
  Villain.prototype.healthCheck = function() {
    if (this.healthPoints <= 0) {
      return targaryen.destroy();
    }
  }
  
  Hero.prototype.nightWatch = function(other) {
      other.healthPoints = other.healthPoints-20;
      console.log(`${this.name} attacked ${other.name}.\n ${other.name} has ${other.healthPoints} health points left`);
  }
  Hero.prototype.healthCheck = function() {
    if (this.healthPoints <= 0) {
      return stark.destroy();
    }
  }
  
  
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  const stark = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 6,
      width: 2.5,
      height: 180,
    },
    healthPoints: 60,
    name: 'Jon Snow',
    team: 'Winter is comming',
    weapons: [
      'warewolf',
      'dagger',
      'needle'
    ],
    language: 'northern',
    attack: 10,
    defend: 15
  });
  const targaryen = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 5.5,
      width: 2,
      height: 130,
    },
    healthPoints: 100,
    name: 'Daenerys Stormborn of the Targaryen',
    team: 'Fire and Blood',
    weapons: [
      'dragon',
      'dragonglass',
      'valyrian'
    ],
    language: 'dothraki',
    attack: 25,
    defend: 1
  });

// call functions
targaryen.dracarys(stark);
stark.nightWatch(targaryen);
stark.nightWatch(targaryen);
stark.nightWatch(targaryen);
targaryen.dracarys(stark);


targaryen.healthCheck();


stark.healthCheck();
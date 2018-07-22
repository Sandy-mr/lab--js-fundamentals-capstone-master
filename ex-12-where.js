 /**
  *  where()
  *
  * Write a function where() that takes two inputs, a list of obj[i]s and
  * a properties obj[i]. It should return a new list containing only those
  * obj[i]s that meet the key-value conditions in the properties obj[i].
  *
  *
 **/

function where (obj, conditions) {
  var expectedArray = [];
  size = [1,2];
  var prev = {};
  var propertys = Object.keys(conditions);
  if (propertys.length == size[0]) {
    for (var i = obj.length - 1; i >= 0; i--) {
      if (obj[i][propertys[0]] == conditions[propertys[0]]) {
        prev.title = obj[i].title;
        expectedArray.unshift(prev);
      }
    }
    return expectedArray;
  } else if (propertys.length == size[1]) {
    for (var i = obj.length - 1; i >= 0; i--) {
      if (obj[i][propertys[0]] == conditions[propertys[0]] && obj[i][propertys[1]] == conditions[propertys[1]]) {
         prev.title = obj[i].title;
        expectedArray.unshift(prev);
      }
    }
    return expectedArray;
  }
}


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

 var plays = [
     { title: "Cymbeline", author: "Shakespeare", year: 1623 },
     { title: "The Tempest", author: "Shakespeare", year: 1623 },
     { title: "Hamlet", author: "Shakespeare", year: 1603 },
     { title: "The Maid in the Mill", author: "Fletcher", year: 1623 },
     { title: "A Streetcar Named Desire", author: "Williams", year: 1947 },
     { title: "King Lear", author: "Shakespeare", year: 1608 },
     { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
     { title: "Macbeth", author: "Shakespeare", year: 1623 },
     { title: "King Lear", author: "Shakespeare", year: 1608 },
     { title: "Glass Menagerie", author: "Williams", year: 1944 },
     { title: "The Misunderstanding", author: "Camus", year: 1944 },
     { title: "The Just Assassins", author: "Camus", year: 1949 },
     { title: "Pericles", author: "Shakespeare", year: 1609 },
     { title: "Caligula", author: "Camus", year: 1944 },
     { title: "Taming of the Shrew", author: "Shakespeare", year: 1623 },
     { title: "Death of a Salesman", author: "Miller", year: 1949 },
 ]

 var sh8sprQuery = where(plays, {author: "Shakespeare"})
 console.log("[1] Should return true");
 console.assert( sh8sprQuery instanceof Array )
 console.log("==================================================");
 console.log();

 console.log("[2] Should return a length of 9");
 console.assert( sh8sprQuery.length === 9 )
 console.log("==================================================");
 console.log();

 console.log("[3] Should return 'Cymbeline' for [0]['title']");
 console.assert( sh8sprQuery[0]['title'] === "Cymbeline" )
 console.log("==================================================");
 console.log();

 var sh8sprQuery2 = where(plays, {year: 1611})
 console.log("[4] Should return a length of 0");
 console.assert( sh8sprQuery2.length === 0 )
 console.log("==================================================");
 console.log();

 var midCentPlays = where(plays, {year: 1944})
 console.log("[5] Should return a length of 3");
 console.assert( midCentPlays.length === 3 )
 console.log("==================================================");
 console.log();

 var sh8sprQuery3 = where(plays, {author: "Shakespeare", year: 1623})
 console.log("[6] Should return a length of 4");
 console.assert( sh8sprQuery3.length === 4 )
 console.log("==================================================");
 console.log();

 var sh8sprQuery3 = where(plays, {author: "Camus", year: 1944})
 console.log("[7] Should return a length of 2");
 console.assert( sh8sprQuery3.length === 2 )
 console.log("==================================================");
 console.log();

const isSeller = (person) => person === "jonny";

const graph = {
  "you": ["alice", "bob", "claire"],
  "bob": ["anuj", "peggy"],
  "alice": ["peggy"],
  "claire": ["thom", "jonny"],
  "anuj": [],
  "peggy": [],
  "thom": [],
  "jonny": [],
};

const search = (name) => {
  const search_queue = [];
  search_queue.push(...graph[name]);
  const searched = [];
  while (search_queue.length > 0) {
    const person = search_queue.shift();
    console.log(person);
    if (!searched.includes(person)) {
      if (isSeller(person)) {
        console.log(`${person} is seller!`);
        return true;
      } else {
        search_queue.push(...graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
};

search("you");

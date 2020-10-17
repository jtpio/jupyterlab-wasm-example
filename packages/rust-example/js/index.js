const mod = import("../pkg/index.js");

mod.then(x => {
  console.log(x.add(2, 3));
});

mod.catch(console.error);

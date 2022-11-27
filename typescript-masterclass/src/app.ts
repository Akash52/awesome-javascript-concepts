class Foo {
  bar() {}
}

const bar = new Foo();

console.log(bar);

// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Song {
  kind: "song";
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: "playlist";
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return "title" in item;
}

function getItemName(item: Song | Playlist) {
  if (item.kind === "song") {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song("wonderful wonderful", 300000));
console.log("Song Name :", songName);

const playlistName = getItemName(
  new Playlist("The Best Songs", [new Song("The Man", 30000)])
);

console.log("Playlist Name :", playlistName);

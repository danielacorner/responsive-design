import React from 'react';
// import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ImageGrid from './components/ImageGrid';

const userData = {
  username: 'Sharky',
  title: "Hey I'm a shark over here!",
  posts: [
    { src: 'https://picsum.photos/600?random=1' },
    { src: 'https://picsum.photos/600?random=2' },
    { src: 'https://picsum.photos/600?random=3' },
    { src: 'https://picsum.photos/600?random=4' },
    { src: 'https://picsum.photos/600?random=5' },
    { src: 'https://picsum.photos/600?random=6' },
    { src: 'https://picsum.photos/600?random=7' },
    { src: 'https://picsum.photos/600?random=8' },
  ],
  followers: 3,
  following: 44,
  description: "I'm da real MVP 🦈🦈🦈",
  website: 'shortcutslist.me',
  profilePhoto:
    'https://www.guillenphoto.com/data/blog/2011/080-galerie-sous-marin-djibouti-golfe-de-tadjourah/wall-of-photos/larges/whale-shark-gulf-of-aden-djibouti-isabelle-guillen-photographers-large-2.jpg',
};

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Profile userData={userData} />
      <ImageGrid posts={userData.posts} />
    </div>
  );
}

export default App;

import Story from "./Story";

export default function StoriesBar() {
  return (
    <div class="stories-bar">
      {stories.map(story => <Story username={story.username} profilePicSrc={story.profilePicSrc} profilePicAlt={story.profilePicAlt}/>)}

      <div class="botoes">
        <ion-icon name="caret-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

const stories = [
  {
    username: "9gag",
    profilePicSrc: "img/9gag.png",
    profilePicAlt: "foto de perfil do 9gag"  
  },
  {
    username: "meowed",
    profilePicSrc: "img/meowed.png",
    profilePicAlt: "foto de perfil do meowed"  
  },
  {
    username: "barked",
    profilePicSrc: "img/barked.png",
    profilePicAlt: "foto de perfil do barked"  
  },
  {
    username: "nathanwpylestrangeplanet",
    profilePicSrc: "img/planet.png",
    profilePicAlt: "foto de perfil do nathanwpylestrangeplanet"  
  },
  {
    username: "wawawiwacomicsa",
    profilePicSrc: "img/wawa.png",
    profilePicAlt: "foto de perfil do wawawiwacomicsa"  
  },
  {
    username: "respondeai",
    profilePicSrc: "img/respondeai.png",
    profilePicAlt: "foto de perfil do respondeai"  
  },
  {
    username: "filomoderna",
    profilePicSrc: "img/filomoderna.png",
    profilePicAlt: "foto de perfil do filomoderna"  
  },
  {
    username: "memeriagourmet",
    profilePicSrc: "img/memeriagourmet.png",
    profilePicAlt: "foto de perfil do memeriagourmet"  
  },
  {
    username: "9gag",
    profilePicSrc: "img/9gag.png",
    profilePicAlt: "foto de perfil do 9gag"  
  },
  {
    username: "adorableanimals",
    profilePicSrc: "img/adorableanimals.png",
    profilePicAlt: "foto de perfil do adorableanimals"  
  },
];


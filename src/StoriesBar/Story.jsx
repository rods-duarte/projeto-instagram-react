export default function Story(props) {
    const {username, profilePicSrc, profilePicAlt} = props;
  return (
    <div class="story">
      <div>
        <img src={profilePicSrc} alt={profilePicAlt} />
      </div>
      <p>{username}</p>
    </div>
  );
}


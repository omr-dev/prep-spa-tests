export const PageSpaTest1 = () => {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
    photo: "johndoe.jpg",
    homepage: "http://www.google.com",
  };
  return (
    <div className="sub-page page-spaTest1">
      <h2>This is Spa Test 1 page</h2>
      <div className="person-box">
        <div className="profile-image-side">
          <img
            src={`src/sub-pages/spa1/images/${person.photo}`}
            alt="profile image"
          />
        </div>
        <div className="profile-info-side">
          <ul>
            <li>
              Name: {person.firstName} {person.lastName}
            </li>
            <li>Age: {person.age}</li>
            <li>
              <a href={person.homepage} target="_blank">
                Homepage
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

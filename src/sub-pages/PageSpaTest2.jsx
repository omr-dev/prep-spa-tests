export const PageSpaTest2 = () => {
  const companies = [
    { id: 1, title: "Nike" },
    { id: 2, title: "Adidas" },
    { id: 3, title: "Puma" },
    { id: 4, title: "New Balance" },
    { id: 5, title: "ASICS" },
  ];

  const events = [
    {
      title: "Meetings",
      items: [
        { title: "Sales", date: "2022-05-12" },
        { title: "Finance", date: "2022-05-15" },
        { title: "Company", date: "2022-05-17" },
      ],
    },
    {
      title: "Conferences",
      items: [
        {
          title: "JavaScript Development",
          location: "Berlin",
          date: "2022-06-10",
        },
        { title: "React Ecosystems", location: "Hamburg", date: "2022-06-22" },
        {
          title: "Angular Development",
          location: "Frankfurt",
          date: "2022-06-27",
        },
      ],
    },
  ];
  return (
    <div className="sub-page page-spaTest2">
      <h2>This is Spa Test 2 page</h2>
      <div className="companies">
        <h3>Companies</h3>
        <ol>
          {companies.map((company) => {
            return <li key={company.id}>{company.title}</li>;
          })}
        </ol>
      </div>
      <div className="events">
        {events.map((eventType, i) => {
          return (
            <div key={i}>
              <h4>{eventType.title}</h4>
              <ol>
                {eventType.items.map((eventItem, index) => {
                  return (
                    <li key={index}>
                      {`${eventItem.date}->${eventItem.title}`}
                      {eventItem.location && ` (${eventItem.location})`}
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

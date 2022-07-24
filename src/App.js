import Cards from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="heading">Our Team</h1>
      <div className="main-container">
        <h2 className="sec-heading">Governors</h2>
        <section className="por-groups" id="governors">
          <Cards name="Name - 1" por="Governor" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name - 2" por="Governor" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
        </section>

        <h2 className="sec-heading">Heads</h2>
        <section className="por-groups" id="heads">
          <Cards name="Name-1" por="Web Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-2" por="Design Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-3" por="Sponsorship Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-4" por="Publicity Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
        </section>

        <h2 className="sec-heading">Sub - Heads</h2>
        <section id="subheads" className="por-groups">
          <Cards name="Name-1" por="Web Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-2" por="Design Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-3" por="Sponsorship Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-4" por="Publicity Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-1" por="Web Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-2" por="Design Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-3" por="Sponsorship Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />
          <Cards name="Name-4" por="Publicity Head" instagram="https://www.instagram.com/eeshaansethia/" facebook="https://www.facebook.com/sethiaeeshaan/" linkedin="https://www.linkedin.com/in/eeshaansethia/" />

        </section>


      </div>
    </>
  );
}

export default App;

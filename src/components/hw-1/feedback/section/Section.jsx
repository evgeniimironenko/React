const Section = ({ isFirstLevelTitle, title, children }) => (
  <section>
    {isFirstLevelTitle ? <h1>{title}</h1> : <h2>{title}</h2>}
    {children}
  </section>
);

export default Section;

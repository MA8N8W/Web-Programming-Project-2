function PageMain() {
    return(
        <main id="main-content" className="wrapper" tabIndex="-1">
            <h1>Welcome</h1>
            <article>
                <p>The following page was made with React. The header, footer, menu bar and of course the main content are all separated into individual files and are managed as React Components. The main content is switched out according to what page you're currently visiting while the rest (header, footer, menu bar) is shared among them.</p>
                <p>While React is capable of combining all <abbr title="Cascading Style Sheets">.CSS</abbr> files into a single file, I opted to load them as separate files instead for manageability reasons.</p>
            </article>
        </main>
    )
}

export default PageMain
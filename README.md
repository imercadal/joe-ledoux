This is a personal webpage for Neuroscientist, Author and Musician Joseph E. LeDoux.

# Note to self re: /media/_[type]/page.tsx
This was the original dynamic route for the media section, where all media types (interviews, performances, read) lived under a single, dynamic, [type] route. Later, the client requested separate pages instead, which is why `/media/interviews`, `/media/performances`, and `/media/read` each have their own `page.tsx`. In case we are requested to change it back to how it was in the original proposal, taking out the guion bajo will make the page active, and the individual pages for each media type can be deleted.

## FrontEnd
/neuroscientist
    /publications
    /lectures

/author
    /books
    /blogs (and columns)

/musician
    /amygdaloids
        /albums
    /soloprojects

/media
    /watch
    /listen
    /read

## Backend



spotify
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/57L6C0WjJO4mBkYABP5SIb?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/15879461/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/000000/" height="90" width="100%" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>


For NewsBanner:
If we want to dismiss the banner and that to persist across pages, use localStorage.

  useEffect(() => {
    const storedDismiss = localStorage.getItem("newsBannerDismissed");
    if (storedDismiss === "true") {
      setIsVisible(false);
    }
  }, []);

    const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("newsBannerDismissed", "true"); // Save to storage
  };

  then, change onClick={ handleDismiss }
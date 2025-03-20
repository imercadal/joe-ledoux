This is a personal webpage for Neuroscientist, Author and Musician Joseph E. LeDoux.

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


Connect to MongoDB through string!


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
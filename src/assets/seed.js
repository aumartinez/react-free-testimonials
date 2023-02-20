const Seed = [
  {
    name : 'Shawn Wang',
    country : 'Singapore',
    img : 'img/t-shawn.png',
    position : 'Software Engineer',
    company : 'Amazon',
    quote : () => {
      return (
        <>
        It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life</strong>.
        </>
      )        
    }
  },
  {
    name : 'Sarah Chima',
    country : 'Nigeria',
    img : 'img/t-sarah.png',
    position : 'Software Engineer',
    company : 'ChatDesk',
    quote : () => {
      return(
        <>
        <strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.
        </>
      )
    }
  },
  {
    name : 'Emma Bostian',
    country : 'Sweden',
    img : 'img/t-emma.png',
    position : 'Software Engineer',
    company : 'Spotify',
    quote : () => {
      return (
        <>
        I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify.
        </>
      )
    }
  }
];

export default Seed;
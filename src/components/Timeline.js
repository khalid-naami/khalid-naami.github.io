import React from 'react';

const journeyData = [
  {
    year: 2009,
    icon: "🇲🇦",
    description: <>Since moving from the city of Laayoune, I have settled in the capital.</>
  },
  {
    year: 2023,
    icon: "🎓",
    description: <>I completed my studies in Business Administration and Global Macroeconomics. At the same time, I was learning Python and JavaScript.</>
  },
  {
    year: 2026,
    icon: "📈",
    description: <>Announced Dashboard Options to the world for use in market analysis.</>
  },
  {
    year: 2024,
    icon: "📊",
    description: <>Since I started working on the project, no one has helped me financially; all the budget was from me.</>
  },
  {
    year: 2025,
    icon: "🧪",
    description: <>I finished the project in the summer of 2025, then I started testing it until it was ready for launch.</>
  },


  {
    year: 2023,
    icon: "🚀",
    description: <>I started developing applications in 2023, including this one which analyzes seasonality and historical price data - [<a href="https://seasonality-data.streamlit.app/" target="_blank" rel="noreferrer">Seasonality-data</a>].</>
  },
  {
    year: 2023,
    icon: "🤖",
    description: <>I had many ideas that I failed to implement, but with the recent artificial intelligence revolution, I reached my peak in many areas.</>
  },
  {
    year: 2024,
    icon: "🐙",
    description: <>This is one of the applications that explains Greek options; I only recently published it in a repository on GitHub - [<a href="https://github.com/khalid-naami/black-scholes-option" target="_blank" rel="noreferrer">black-scholes-option</a>].</>
  },
  {
    year: 2025,
    icon: "🌐",
    description: <>This application contains several web applications, all compiled in one place, used for investment management - [<a href="https://github.com/khalid-naami/Financial-Dashboard" target="_blank" rel="noreferrer">Financial-Dashboard</a>].</>
  },
  {
    year: 2022,
    icon: "🧠",
    description: <>Ever since artificial intelligence emerged, I've been interested in it, particularly in its latest revolutionary aspects; it has elevated the world of software to another dimension.</>
  },
  {
    year: 2023,
    icon: "🤝",
    description: <>After I finished my studies in 2023, I met many people from JPM and CBOE and learned a lot from them.</>
  },
  {
    year: 2024,
    icon: "💻",
    description: <>I studied data science and software development remotely at some technology universities in America and Canada.</>
  },
  {
    year: 2026,
    icon: "📚",
    description: <>I have completed many studies and learned many things, and I am still learning to this day in order to make further progress.</>
  },

];

const Timeline = () => {
  return (
    <ul className="mt-4 text-left pr-2">
      {journeyData.map((item) => (
        <React.Fragment key={item.year}>
          <p>
            <strong>{item.year}</strong> {item.icon} {item.description}
          </p>
          <br />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Timeline;

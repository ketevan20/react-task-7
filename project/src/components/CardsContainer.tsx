import MiniCard from "./MiniCard"
import styled from 'styled-components'
import bgRed from '/images/bg-red.png'
import bgBlue from '/images/bg-blue.png'
import bgPink from '/images/bg-pink.png'
import bgGreen from '/images/bg-green.png'
import bgPurple from '/images/bg-purple.png'
import bgYellow from '/images/bg-yellow.png'
import Card from "./Card"
import { useState } from "react"


const Grid = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(4, 255px);
    grid-template-rows: repeat(2, 245px);
    background-color: rgba(14, 19, 35, 1);
    gap: 30px;
    font-family: 'Rubik', sans-serif;
    padding: 81px 0;

    @media (max-width: 1150px) {
        grid-template-columns: repeat(2, 255px);
        grid-template-rows: repeat(4, 245px);
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fit, minmax(0, 327px));
        grid-template-rows: repeat(8, auto);
        gap: 24px;
    }
`;

const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];




const CardsContainer = () => {
    const [filter, setFilter] = useState('weekly');

    return (
        <Grid>
            <Card handleClick={setFilter} filter={filter}/>

            <MiniCard
                bgImg={bgRed}
                category={data[0].title}
                time={filter === 'daily' ? `${data[0].timeframes.daily.current}hrs` : filter === 'weekly' ? `${data[0].timeframes.weekly.current}hrs` : `${data[0].timeframes.monthly.current}hrs`}
                text={filter === 'daily' ? 'Last Day - ' + data[0].timeframes.daily.previous + 'hrs' : filter === 'weekly' ? 'Last Week - ' + data[0].timeframes.weekly.previous + 'hrs' : 'Last Month - ' + data[0].timeframes.monthly.previous + 'hrs'}
            />
            <MiniCard
                bgImg={bgBlue}
                category={data[1].title}
                time={filter === 'daily' ? `${data[1].timeframes.daily.current}hrs` : filter === 'weekly' ? `${data[1].timeframes.weekly.current}hrs` : `${data[1].timeframes.monthly.current}hrs`}
                text={filter === 'daily' ? 'Last Day - ' + data[1].timeframes.daily.previous + 'hrs' : filter === 'weekly' ? 'Last Week - ' + data[1].timeframes.weekly.previous + 'hrs' : 'Last Month - ' + data[1].timeframes.monthly.previous + 'hrs'}
            />
            <MiniCard
                bgImg={bgPink}
                category={data[2].title}
                time={filter === 'daily' ? `${data[2].timeframes.daily.current}hrs` : filter === 'weekly' ? `${data[2].timeframes.weekly.current}hrs` : `${data[2].timeframes.monthly.current}hrs`}
                text={filter === 'daily' ? 'Last Day - ' + data[2].timeframes.daily.previous + 'hrs' : filter === 'weekly' ? 'Last Week - ' + data[2].timeframes.weekly.previous + 'hrs' : 'Last Month - ' + data[2].timeframes.monthly.previous + 'hrs'}
            />
            <MiniCard
                bgImg={bgGreen}
                category={data[3].title}
                time={filter === 'daily' ? `${data[3].timeframes.daily.current}hrs` : filter === 'weekly' ? `${data[3].timeframes.weekly.current}hrs` : `${data[3].timeframes.monthly.current}hrs`}
                text={filter === 'daily' ? 'Last Day - ' + data[3].timeframes.daily.previous + 'hrs' : filter === 'weekly' ? 'Last Week - ' + data[3].timeframes.weekly.previous + 'hrs' : 'Last Month - ' + data[3].timeframes.monthly.previous + 'hrs'}
            />
            <MiniCard
                bgImg={bgPurple}
                category={data[4].title}
                time={filter === 'daily' ? `${data[4].timeframes.daily.current}hrs` : filter === 'weekly' ? `${data[4].timeframes.weekly.current}hrs` : `${data[4].timeframes.monthly.current}hrs`}
                text={filter === 'daily' ? 'Last Day - ' + data[4].timeframes.daily.previous + 'hrs' : filter === 'weekly' ? 'Last Week - ' + data[4].timeframes.weekly.previous + 'hrs' : 'Last Month - ' + data[4].timeframes.monthly.previous + 'hrs'}
            />
            <MiniCard
                bgImg={bgYellow}
                category={data[5].title}
                time={filter === 'daily' ? `${data[5].timeframes.daily.current}hrs` : filter === 'weekly' ? `${data[5].timeframes.weekly.current}hrs` : `${data[5].timeframes.monthly.current}hrs`}
                text={filter === 'daily' ? 'Last Day - ' + data[5].timeframes.daily.previous + 'hrs' : filter === 'weekly' ? 'Last Week - ' + data[5].timeframes.weekly.previous + 'hrs' : 'Last Month - ' + data[5].timeframes.monthly.previous + 'hrs'}
            />
        </Grid>
    )
}

export default CardsContainer
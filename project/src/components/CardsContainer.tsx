import MiniCard from "./MiniCard"
import styled from 'styled-components'
import bgRed from '/images/bg-red.png'
import bgBlue from '/images/bg-blue.png'
import bgPink from '/images/bg-pink.png'
import bgGreen from '/images/bg-green.png'
import bgPurple from '/images/bg-purple.png'
import bgYellow from '/images/bg-yellow.png'
import Card from "./Card"


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


const CardsContainer = () => {
    return (
        <Grid>
            <Card />

            <MiniCard
                bgImg={bgRed}
                category='Work'
                time='32hrs'
                text="Last Week - 36hrs"
            />
            <MiniCard
                bgImg={bgBlue}
                category='Play'
                time='10hrs'
                text="Last Week - 8hrs"
            />
            <MiniCard
                bgImg={bgPink}
                category='Study'
                time='4hrs'
                text="Last Week - 7hrs"
            />
            <MiniCard
                bgImg={bgGreen}
                category='Exercise'
                time='4hrs'
                text="Last Week - 5hrs"
            />
            <MiniCard
                bgImg={bgPurple}
                category='Social'
                time='5hrs'
                text="Last Week - 10hrs"
            />
            <MiniCard
                bgImg={bgYellow}
                category='Self Care'
                time='2hrs'
                text="Last Week - 2hrs"
            />
        </Grid>
    )
}

export default CardsContainer
import { useEffect, useState } from "react";
import styled from "styled-components"

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        
        const json = await response.json();
        
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data")
      }
    };
    fetchFoodData();
  }, []);

  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input type="text" placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCard></FoodCard>
      </FoodCardContainer>

    </MainContainer>
  )
};

export default App;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .logo img{
    filter: drop-shadow(4px 1px 1px #ff4343);
  }
  
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      outline: none;
      color: #fff;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      font-family: 'Roboto Condensed', sans-serif;
      letter-spacing: 1px;
      padding: 0 10px; 
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 40px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
`;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png")    ;
  height: calc(100vh - 210px);
  // background-size: cover;
`;
const FoodCard = styled.section``;


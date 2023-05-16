// import React from 'react'
// import { useEffect, useState } from 'react';

// const Home = () => {
//   const [state, setState] = useState(2);
//   const [data, setData] = useState([]);

// useEffect(() => {
//   async function getData() {
//     const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords${state}&idStarts=1001`)

//     const res = await get.json();

//     setData(res)
//     console.log(res);
//   }
//   getData();

//   document.title = `(${state}) Online`;
//   // window.alert('useEffect Called');
// }, [state]);

//   return (
//     <div>
//       <button onClick={() => setState(state + 2)}>Click Me {state}</button>
//       {
//         data.map((element, index) => {
//           return (
//             <div className='key' key={index}>
//               <h3>{element.firstName}</h3>
//               <h3>{element.lastName}</h3>
//               <h3>{element.email}</h3>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default Home

// import React, { useEffect, useState } from 'react';

// function Home() {
//   const [data,setData] = useState([])
// 	useEffect(() => {
// 		fetch('https //localhost:4000/todo').then((result) => {
// 			result.json().then((resp) => {
// 				console.warn('result', resp);
//         setData(resp)
// 			});
// 		});
// 	},[]);
//   console.warn(data);
// 	// fetch("https://dummyjson.com/products")
// 	return <div>Home</div>;
// }

// export default Home;

import React, { Component } from 'react';
// import Header from './Header';
import Product from './Product';

export class Home extends Component {
	constructor() {
		super();
		console.log('Hello i am cunstructor from news component');
		this.state = {
			articles: this.articles,
			loading: false
		};
	}

	async componentDidMount() {
		console.log('Rutvik');
    let url = "https://dummyjson.com/products"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
	}

	render() {
    console.log("render");
		return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles?.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Product title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""}
              // imageUrl={element.urlToImage} newsUrl={element.url} 
              id={element.Id} 
              // description={element.description}
              price={element.Price}
              discountPercentage={element.discountPercentage}
              rating={element.Rating}
              stock={element.Stock}
              brand={element.Brand}
              category={element.Category}
              thumbnail={element.Thumbnail}
              images={element.Images}
              />
            </div>
          })}
        </div>
      </div>
    )
	}
}

export default Home;

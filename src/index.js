import React from 'react';
import ReactDOM from 'react-dom';
import MenuAppBar from './App.js';
// import {ApolloProvider} from 'react-apollo';
// import ApolloClient,{createNetworkInterface} from 'apollo-client';
// import Button from 'antd/lib/button';
// import Routes from './routes';
// import 'antd/dist/antd.css';

// const networkInterface = createNetworkInterface({
// 	uri: 'http://localhost:3000/graphql',
// });

// const client = new ApolloClient({
// 	networkInterface: networkInterface
// });

// const App = () => {
// 	return (
// 		<ApolloProvider client={client}>
// 			<h1>dfghj</h1>
// 		</ApolloProvider>
// 	);
// }
// 
ReactDOM.render(<MenuAppBar/>, document.getElementById('root'));

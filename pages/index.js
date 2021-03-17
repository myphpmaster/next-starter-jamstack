import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>Malaysia Sustainable Development Goals</h1>

    <h3>Hooray 🎉 - Our first site live now!! </h3>
	
	<div>
		<h3><a target="_blank" href="https://industry.malaysia-sdg.cyou/">https://industry.malaysia-sdg.cyou/</a> @ Alibaba Cloud</h3> 
		- Plesk 
		- Centos 
		
		<h3>Mirror at <a target="_blank" href="https://industrial.malaysia-sdg.cyou/">https://industrial.malaysia-sdg.cyou/</a> @ Azure Cloud</h3>
		- Bitnami
		- Ubuntu
	</div>

    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home

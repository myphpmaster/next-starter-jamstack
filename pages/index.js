import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>Malaysia Sustainable Development Goals</h1>

    <h3>Hooray 🎉 - Our first site live now!! </h3>
	
	<div>
		<h3><a target="_blank" href="https://industry.malaysia-sdg.cyou/">https://industry.malaysia-sdg.cyou/</a> @ Alibaba Cloud</h3> 
		<ul class="no-bullet">
			<li>Plesk Onyx 17.8.11 Update #95</li>
			<li>CentOS Linux 7.4.1708</li>
		</ul>
		
		<h3>Mirror at <a target="_blank" href="https://industrial.malaysia-sdg.cyou/">https://industrial.malaysia-sdg.cyou/</a> @ Azure Cloud</h3>
		<ul class="no-bullet">
			<li>Bitnami WordPress with NGINX and SSL 5.6.2-0</li>
			<li>Linux 4.19.0-14-cloud-amd64 SMP Debian 4.19.171-2 x86_64</li>
		</ul>
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
	  
	  .no-bullet {
		 list-style: none;
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

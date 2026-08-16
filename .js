const URL = 'https://raw.githubusercontent.com/TheSpeedX/PROXY-List/refs/heads/master/socks5.txt';

let proxies = [];

async function fetchRandomProxies() {
  try {
    const response = await fetch(URL);
    const text = await response.text();

    const allProxies = text.split('\n')
                           .map(line => line.trim())
                           .filter(line => line.length > 0);

    const shuffled = allProxies.sort(() => 0.5 - Math.random());
    
    proxies = shuffled.slice(0, 5);

    return proxies;
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

fetchRandomProxies().then(() => {
  console.log('Successful: ', proxies);
});
